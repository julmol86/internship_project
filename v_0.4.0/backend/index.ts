// import Koa classes
const Koa = require('koa');
const Router = require('@koa/router');
const Cors = require('@koa/cors');
const BodyParser = require('koa-body');
const bcrypt = require('bcrypt')
import connection from './db';
import { sendMail, SUBJECT_ADMIN, SUBJECT_APPLICANT, SUBJECT_ORGANIZATION, TEXT_ADMIN, TEXT_APPLICANT } from './mailer';
import { GMAIL_USER } from "../../DO_NOT_COMMIT";

// create instances of Koa and Koa-Router classes
const app = new Koa();
const router = new Router();

router.get('/', (ctx: any) => {
    ctx.body = 'Hello World';
  });

// post API endpoint for form registration  
// check URL on the frontend
router.post('/register', async (ctx: any) => {
  const data = ctx.request.body
  const con = await connection
  await con.query(
    'INSERT INTO `registration` (firstname, lastname, email, birthdate, sportsclub, phonenumber, address, city, postalcode, country, notvisibletopublic, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [data.firstName, data.lastName, data.email, convertToDate(data.birthDate), data.sportsClub, data.phoneNumber, data.address, data.city, data.postalCode, data.country, data.notVisibleToPublic, data.categoryId],
  );

  // send 2 e-mails: to admin and to applicant
  sendMail(data.email, SUBJECT_APPLICANT, TEXT_APPLICANT)
  sendMail(GMAIL_USER, SUBJECT_ADMIN, TEXT_ADMIN + data.firstName + ' ' + data.lastName)

  ctx.status = 200;
  ctx.body = 'all good!';
});

router.get('/event/:eventId/registrationlist', async (ctx: any) => {
  const eventId = ctx.params.eventId
  const { showOnlyPublic } = ctx.request.query
  const con = await connection
  let query = `SELECT
      r.id,
      r.firstname as firstName,
      r.lastname as lastName,
      r.email,
      c.namefi as nameFi,
      c.nameen as nameEn,
      r.sportsclub as sportsClub,
      r.phonenumber as phoneNumber,
      r.paymentreceived as paymentReceived
    FROM registration r
    LEFT JOIN category c on c.id = r.category_id
    WHERE c.event_id = ${eventId}`
  if (showOnlyPublic === 'true') {
    query += ' AND r.notvisibletopublic is false'
  }
  ctx.status = 200;
  ctx.body = await con.query(query);
});

// sign-in form
router.post('/signin', async (ctx: any) => {
  const data = ctx.request.body
  const con = await connection
  const [user] = await con.query('SELECT * FROM `user` WHERE login = ?', [data.login]);
  if (!user) {
    ctx.status = 204; // 204 No Content
    ctx.body = { loggedIn: false, login: undefined, role: undefined, organizationId: undefined };
  } else {
    const res = await bcrypt.compare(data.password, user.password);
    
    ctx.status = 200;
    ctx.body = { loggedIn: res, login: user.login, role: user.role, organizationId: user.organization_id };
  }
});

const PASSWORD_LENGTH = 12;
const generatePassword = (length: number): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]:';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

// createorganization form
router.post('/createorganization', async (ctx: any) => {
  const data = ctx.request.body
  const con = await connection

  try {
    // create organization
    await con.query(
      'INSERT INTO `organization` (name, email, regnumber, phone, address, bic, iban) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [data.name, data.email, data.regnumber, data.phone, data.address, data.bic, data.iban],
    );

    // generate password for new user
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds)
    const password = generatePassword(PASSWORD_LENGTH)
    const passwordHash = await bcrypt.hash(password, salt)

    // create user for that created organization
    await con.query(
      'INSERT INTO `user` (login, password, role, organization_id) VALUES (?, ?, ?, LAST_INSERT_ID())',
      [data.email, passwordHash, 'ORGANIZATION'],
    );

    // send e-mail containing password
    sendMail(data.email, SUBJECT_ORGANIZATION, 'Tunnus: ' + data.email + ' , salasana: ' + password)

    ctx.status = 200;
    ctx.body = 'all good!';
  } catch (e) {
    console.log(e)
    ctx.status = 500;
    ctx.body = 'not good';
  }
});

const addHours = (date: string | number | Date, hours: number) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + hours);
  return newDate;
}

const convertToDate = (date: string): string | undefined => date ? addHours(date, 4).toISOString().slice(0, 10) : undefined;

// createevent form
router.post('/createevent', async (ctx: any) => {
  const data = ctx.request.body
  const con = await connection

  try {
    // create event
    console.log(data.startdate)
    await con.query(
      'INSERT INTO `event` (namefi, nameen, city, address, startdate, enddate, registrationduedate, managedbyorganization, infotext, organization_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [data.namefi, data.nameen, data.city, data.address, convertToDate(data.startdate), convertToDate(data.enddate), convertToDate(data.registrationduedate), data.managedbyorganization, data.infotext, data.organizationId],
    );

    // create categories
    const [maxEvent] = await con.query('SELECT max(id) as eventId FROM `event`');
    for (let category of data.categories) {
      await con.query(
        'INSERT INTO `category` (namefi, nameen, price1, duedate1, price2, duedate2, price3, duedate3, price4, duedate4, price5, duedate5, agecategory, event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [category.namefi, category.nameen, category.price1, convertToDate(category.duedate1), category.price2, convertToDate(category.duedate2), category.price3, convertToDate(category.duedate3), category.price4, convertToDate(category.duedate4), category.price5, convertToDate(category.duedate5), category.agecategory, maxEvent.eventId],
      );
    }

    ctx.status = 200;
    ctx.body = 'all good!';
  } catch (e) {
    console.log(e)
    ctx.status = 500;
    ctx.body = 'not good';
  }
});

router.get('/organizations', async (ctx: any) => {
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT id, name FROM `organization`');
});

router.get('/organizationsall', async (ctx: any) => {
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT id, name, email, regnumber FROM `organization` ORDER BY id');
});

router.get('/eventsall', async (ctx: any) => {
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT id, namefi as nameFi, nameen as nameEn, city, address, startdate as startDate, enddate as endDate, registrationduedate as registrationDueDate, infotext as infoText FROM `event` ORDER BY startdate');
});

router.get('/event/:eventId/categories', async (ctx: any) => {
  const eventId = ctx.params.eventId
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT id, namefi as nameFi, nameen as nameEn, price1 as price, duedate1 as dueDate FROM `category` WHERE event_id = ' + eventId);
});

router.get('/alleventsandcategories', async (ctx: any) => {
  const organization = ctx.request.query.organization
  const con = await connection
  ctx.status = 200;

  const categories = await con.query(`SELECT
    id,
    namefi as nameFi,
    nameen as nameEn,
    price1,
    duedate1 as dueDate1,
    price2,
    duedate2 as dueDate2,
    price3,
    duedate3 as dueDate3,
    price4,
    duedate4 as dueDate4,
    price5,
    duedate5 as dueDate5,
    event_id as eventId
  FROM category`);

  let eventsQuery = `SELECT
    e.id,
    e.namefi as nameFi,
    e.nameen as nameEn,
    e.city,
    e.address,
    e.startdate as startDate,
    e.enddate as endDate,
    e.registrationduedate as registrationDueDate,
    e.infotext as infoText,
    o.name as organizationName
  FROM event e
  LEFT JOIN organization o on o.id = e.organization_id`
  if (organization) {
    eventsQuery += ' WHERE o.id = ' + organization
  }
  eventsQuery += ' ORDER BY startdate'
  const events = await con.query(eventsQuery);
  
  ctx.body = events.map((e: { id: any; }) => ({
    ...e,
    categories: categories.filter((c: { eventId: any; }) => c.eventId === e.id)
  }))
});

router.post('/registrationpayment', async (ctx: any) => {
  const data = ctx.request.body
  const con = await connection

  try {
    await con.query('UPDATE `registration` SET paymentreceived = ? WHERE id = ?', [data.paymentReceived, data.regId])
    ctx.status = 200;
    ctx.body = 'all good!';
  } catch (e) {
    console.log(e)
    ctx.status = 500;
    ctx.body = 'not good';
  }
});

// use inported classes and created instances for app
app
  .use(Cors())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

// listen on port 8090
app.listen(8090);

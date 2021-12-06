// import Koa classes
const Koa = require('koa');
const Router = require('@koa/router');
const Cors = require('@koa/cors');
const BodyParser = require('koa-body');
import connection from './db';

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
    'INSERT INTO `registration1` VALUES (?, ?, ?)',
    [data.firstName, data.lastName, data.email],
  );
  ctx.status = 200;
  ctx.body = 'all good!';
});

router.get('/registrationList', async (ctx: any) => {
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT first_name as firstName, last_name as lastName, email FROM `registration1`');
});


// use inported classes and created instances for app
app
  .use(Cors())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

// listen on port 8090
app.listen(8090);

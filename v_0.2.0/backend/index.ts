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
    'INSERT INTO `registration` (firstname, lastname, email, league) VALUES (?, ?, ?, ?)',
    [data.firstName, data.lastName, data.email, data.league],
  );
  ctx.status = 200;
  ctx.body = 'all good!';
});

router.get('/registrationList', async (ctx: any) => {
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT firstname as firstName, lastname as lastName, email FROM `registration`');
});

router.get('/leagues', async (ctx: any) => {
  const con = await connection
  ctx.status = 200;
  ctx.body = await con.query('SELECT leaguekey as leagueKey, leaguename as leagueName FROM `league`');
});



// use inported classes and created instances for app
app
  .use(Cors())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

// listen on port 8090
app.listen(8090);

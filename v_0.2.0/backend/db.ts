const mysql = require('promise-mysql');

const config = {
  host: 'localhost',
  port: 3306,
  user: 'ict4n',
  password: 'ict4n',
  database: 'ict4n',
  connectionLimit: 100
};

const connection = mysql.createConnection(config);

export default connection;

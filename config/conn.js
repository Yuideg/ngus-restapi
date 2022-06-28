const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nigus',
  password: 'superuserpassword',
  port: 5432,
})
module.exports=pool;

const {Pool} = require("pg");
//the database variables are in the .env files. PG library automatically
//fetches the data from .env
const pool = new Pool();

module.exports={
    query: (text, params)=>pool.query(text,params),
};
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


  const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    })
export default pool







// export function createPool() {
//     const pool = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port: process.env.PORT,
//     })
//     return pool
// }
// export const pool = createPool()
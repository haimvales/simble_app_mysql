// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();
// // console.log(process.env)

// // process.argv
// // process.env
// const pool = mysql.createPool({
//     host: process.env.HOST || 'localhost',
//     user: process.env.USER || 'root',
//     password: process.env.PASSWORD || 'rootpass123',
//     database: process.env.DATABASE || 'mysqlapp',

//     // port: 3036
// })


// const [res] = await pool.execute("create database if not exists momo");
// console.log(res)
// const [res] = await pool.execute("show databases");
// console.log(res)
// const [res] = await pool.execute("show databases");
// console.log(res)
// const [res] = await pool.execute("show tables");
// console.log(res)
// const [res] = await pool.execute("show databases");
// console.log(res)
// const [res] = await pool.execute("select * from users");
// console.log(res)
// const [res] = await pool.execute("CREATE TABLE Persons (id int,  users int);");
// const [res] = await pool.execute("select * from Persons");   
// const [res] = await pool.execute("INSERT INTO Persons (id, users) VALUES (123, 1111)");


// const [res] = await pool.execute("create database if not exists momo");
// const [res] = await pool.execute("CREATE TABLE if not exists users (id int PRIMARY KEY aute_increment,  user VARCHAR (255));"); 
// const [res] = await pool.execute("INSERT INTO users (id, user) VALUES (123, 'haim')");
// const [res] = await pool.execute("select * from users");   
// console.log(res);

// pool.query
// pool.execute

// export default pool;





// export async function createDatabase(name_database) {
//     // בדיקה פשוטה: האם השם מכיל רק תווים בטוחים?
//     // ^ = התחלה, [a-zA-Z0-9_] = אותיות/מספרים/קו תחתון, + = לפחות אחד, $ = סוף
//     const isSafe = /^[a-zA-Z0-9_]+$/.test(name_database);

//     if (!isSafe) {
//         console.error("שם לא תקין! ניסיון להזרקת קוד או שימוש בתווים אסורים.");
//         return; 
//     }

//     try {
//         // עכשיו זה בטוח ב-100% כי בדקנו שאין אף תו שיכול "לשבור" את השאילתה
//         const [res] = await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${name_database}\``);
//         return res;
//     } catch (err) {
//         console.error("שגיאה ביצירת מסד הנתונים:", err);
//     }
// }


// export async function createDatabase(name_database) {
//     // בדיקה בטיחותית: מאפשר רק אותיות באנגלית, מספרים וקו תחתון
//     const safeNamePattern = /^[a-zA-Z0-9_]+$/;
    
//     if (!safeNamePattern.test(name_database)) {
//         throw new Error("Invalid database name. Only alphanumeric characters and underscores are allowed.");
//     }

//     try {
//         // עכשיו זה בטוח לשרשר, כי בדקנו שאין תווים מסוכנים
//         const [res] = await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${name_database}\``);
//         return res;
//     } catch (err) {
//         console.error("Database error:", err);
//     }
// }


// export async function createDatabase(name_database) {
//     // בדיקה מינימלית: ששם מסד הנתונים קיים ולא ריק
//     if (!name_database) return;

//     try {
//         // אין צורך ב- ; בסוף המחרוזת
//         const [res] = await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${name_database}\``);
//         return res;
//     } catch (err) {
//         console.error(err);
//     }
// }

// import {pool as connection} from '../db.js';
import connection from '../db.js';


//ליצור טבלא
// const [res] = await connection.execute('CREATE TABLE if not exists users123 (ID int PRIMARY KEY auto_increment,  USER VARCHAR (255));'); 
// console.log(res)
//לקרוא טבלא
//ליצור משתמש בטבלא
//לערוך משתמש בטבלת משתמשים
//?
//למחוק משתמש

// async function creataTable(name) {
//     try {
//         const [res] = await connection.execute(`insert from users where id like ?`, [name] )
//         return res?.affectedRows >= 1;
//     }catch (err) {
//         console.error({ err })
//     }
// }

export async function getAll() {
    try {
        const [res] = await connection.execute("select * from users123")
        return res
    }catch(err) {
        console.error({ err })
    }
}

export async function insertOne(data = {}) {
    try {
        const [res] = await connection.execute(`insert into users123 (ID,USER) values(? , ?)`, [data.id , data.username])
        if (res.affectedRows === 1)
            return { inserId: res }
    }catch (err) {
        console.error({ err })
    }
}

export async function findById(id) {
    try {
        const [res] = await connection.execute(`select * from users123 WHERE ID like ?`, [id])
        if (res)
            return res[0]
    }catch (err) {
        console.error({ err })
    }
}

export async function deleteById(id) {
    try {
        const [res] = await connection.execute(`delete from users123 where id like ?`, [id] )
        return res?.affectedRows >= 1;
    }catch (err) {
        console.error({ err })
    }
}

// const [res] = await pool.execute("CREATE TABLE if not exists users (id int PRIMARY KEY aute_increment,  user VARCHAR (255));"); 
// console.log(res)
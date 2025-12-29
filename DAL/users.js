// import {pool as connection} from '../db.js';
import connection from '../db.js';


//לקרוא טבלא
export async function getAll() {
    try {
        const [res] = await connection.execute("select * from users")
        return res
    }catch(err) {
        console.error({ err })
    }
}

//ליצור משתמש בטבלא
export async function insertOne(data = {}) {
    try {
        const [res] = await connection.execute(`insert into users (USER) values( ?)`, [ data.username])
        if (res.affectedRows === 1)
            return { inserId: res }
    }catch (err) {
        console.error({ err })
    }
}

//חיפוש משתמש 
export async function findById(id) {
    try {
        const [res] = await connection.execute(`select * from users WHERE ID like ?`, [id])
        if (res)
            return res[0]
    }catch (err) {
        console.error({ err })
    }
}

//למחוק משתמש
export async function deleteById(id) {
    try {
        const [res] = await connection.execute(`delete from users where id like ?`, [id] )
        return res?.affectedRows >= 1;
    }catch (err) {
        console.error({ err })
    }
}

//לערוך משתמש בטבלת משתמשים
export async function updateById(id,user) {
    try {
        const [res] = await connection.execute(`UPDATE users SET USER  = ? WHERE ID =  ?`, [user,id] )
        return res?.affectedRows >= 1;
    }catch (err) {
        console.error({ err })
    }
}

// ליצור טבלא ובדיקה עם לא מכיל תווים לא חוקיים רק מספרים אותיות ומקף תחתון
export async function creataTable(name_table) {
    const isSafe = /^[a-zA-Z0-9_]+$/.test(name_table);
    if (!isSafe) {
        console.error("שם לא תקין");
        return; 
    }    
    try {
        const [res] = await connection.execute(`CREATE TABLE if not exists \`${name_table}\` (id int PRIMARY KEY auto_increment,  user VARCHAR (255));`)
        return res?.warningStatus === 0;
    }catch (err) {
        console.error({ err })
    }
}


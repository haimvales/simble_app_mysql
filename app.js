import { deleteById, findById, getAll, insertOne } from "./DAL/users.js";
import input from 'analiza-sync';
// import connection from './db.js';


let connected = true
while(connected){
    console.log(`
getAll = 1
insertOne = 2
findById = 3
deleteById = 4
Exit = 5
        `); //if (Number.isNaN(Number(givenPrice)))
    const click = input(``)
    switch(click){
        case '1':
            console.log(await getAll())
            break;
        case '2':
            const username = input(`username`)
            let id = input(`id`)
            if(!Number.isNaN(Number(id))){
                id = Number(id)
                console.log(await insertOne({id,username}))
                break;                  
            }
            else{
                console.log("id is not a number")   
                break;             
            }
        case '3':
            const idfind = input(`id`)
            console.log(await findById(idfind))
            break;
        case '4':
            const iddelete = input(`id`)
            console.log(await deleteById(iddelete))
            break;
        case '5':
            connected = false
            break;
        default:
            console.log(`Type a valid value between 1 and 5.`);
    }
}










import { creataTable, deleteById, findById, getAll, insertOne, updateById } from "./DAL/users.js";
import input from 'analiza-sync';


let connected = true
while(connected){
    console.log(`
getAll = 1
insertOne = 2
findById = 3
deleteById = 4
updateById = 5
createtable = 6
Exit = 7
        `); 
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
            const isSafe = /^[0-9]+$/.test(id);
            if (!isSafe){
                console.log(await insertOne({id,username}))
                break; 
            } else {
                console.log(await findById(idfind))
                break;                
            }
        case '4':
            const iddelete = input(`id`)
            console.log(await deleteById(iddelete))
            break;
        case '5':
            const idupdate = input(`id`)
            const usernameupdate = input(`username`)
            console.log(await updateById(idupdate,usernameupdate))
            break;
        case '6':
            const createtable = input(`name table`)
            console.log(await creataTable(createtable))
            break;
        case '7':
            connected = false
            break;
        default:
            console.log(`Type a valid value between 1 and 7.`);
    }
}


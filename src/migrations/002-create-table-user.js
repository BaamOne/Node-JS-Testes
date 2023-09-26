const mysql  = require('mysql2/promise');   

const dataBaseConfig = require('../config/database.js');


async function CreateTableUser() {
    try
    {
        const connection = await mysql.createConnection(dataBaseConfig);
        await connection.query(`USE ${dataBaseConfig.database}`);
        await connection.query(`  
            CREATE TABLE IF NOT EXISTS USER ( 
                ID INT not null PRIMARY KEY AUTO_INCREMENT,
                NAME VARCHAR(255) not null, 
                EMAIL VARCHAR(255),
                PASSWORD VARCHAR(255) not null
            )`);
        await connection.end();
        console.log('User table created!');
    }catch(error){
        console.log('Erros creating table user: ', error);
    }
}


CreateTableUser();
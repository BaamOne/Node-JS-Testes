const mysql  = require('mysql2/promise');   

const dataBaseConfig = require('../config/database.js');


async function CreateDatabase() {
    try
    {
        const connection = await mysql.createConnection({
            host: dataBaseConfig.host,
            user: dataBaseConfig.user,
            password: dataBaseConfig.password,   
            port: dataBaseConfig.port
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${dataBaseConfig.database}`);
        await connection.end();
        console.log('Database created!');
    }catch(error){
        console.log('Erros create database: ', error);
    }
}


CreateDatabase();
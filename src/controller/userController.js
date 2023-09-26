const mysql = require('mysql2/promise');
const dataBaseConfig = require('../config/database.js');


async function CreateUser(req, res){
    try {
        const { PASSWORD, NAME} = req.query;
        const connection = await mysql.createConnection(dataBaseConfig);
        const insertUser = ` INSERT INTO USER (PASSWORD,NAME) VALUES (?,?) `;

        await connection.query(insertUser, [PASSWORD, NAME]);
        await connection.end();

        res.status(201).send({ message: 'User created successfully!' });
        
    } catch (error) {
        res.status(500).send({
            message: 'Erro adding user!',
            body: error
        });
    }

}

module.exports = { CreateUser };
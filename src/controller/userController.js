const mysql = require('mysql2/promise');
const dataBaseConfig = require('../config/database.js');


async function CreateUser(req, res){
    try {
        console.log('req.body da api:', req.query);

        const { PASSWORD, NOME, EMAIL} = req.query;
        console.log( 'SENHA:', PASSWORD, 'NOME:' ,NOME, 'EMAIL:' , EMAIL)


        const connection = await mysql.createConnection(dataBaseConfig);
        const insertUser = ` INSERT INTO USER (PASSWORD,NAME,EMAIL) VALUES (?,?,?) `;

        await connection.query(insertUser, [PASSWORD, NOME, EMAIL]);
        await connection.end();

        res.status(201).send({ message: 'User created successfully!' });
        
    } catch (error) {
        res.status(500).send({
            message: 'Erro adding user!',
            body: error
        });
    }

}

async function GetAllUsers(req, res){
    try{
        const connection = await mysql.createConnection(dataBaseConfig);
        const [rows] = await connection.query(`SELECT name, email, password FROM USER`);
        await connection.end();
        res.status(200).json(rows);

    }catch(error){
        res.status(500).send({
            message: 'Erro getting users!',
            body: error.message
        });
    }

}


async function GetUserById(req, res){
    const { id } = req.params;
    try{
        const connection = await mysql.createConnection(dataBaseConfig);
        const [user] = await connection.query(`SELECT name, email, password FROM USER WHERE id = ?`, [id]);
        await connection.end();
        res.status(200).json(user);
    }catch(error){
        res.status(500).send({
            message: 'Erro getting user by id!',
            body: error.message
        });
    }

}

async function UpdateUser(req,res){
    const { NAME, PASSWORD}  = req.query;
    const { id } = req.params;

    try{
        const connection = await mysql.createConnection(dataBaseConfig);
        await connection.query(`UPDATE USER SET NAME = ?, PASSWORD = ? WHERE id = ?`, [NAME, PASSWORD, id]);
        await connection.end();
        res.status(200).json({ message: 'User updated successfully!'});
    }catch(error){
        res.status(500).send({
            message: 'Erro updating user!',
            body: error.message
        });
    }


}



module.exports = { CreateUser, GetAllUsers, GetUserById, UpdateUser};
const express = require('express');
const router  = express.Router();
const userController = require('../controller/userController.js');

router.post('/users', (req, res)=>{
    userController.CreateUser(req, res);
});

router.get('/users', (req, res)=>{
    userController.GetAllUsers(req, res);
});

router.get('/users/:id', (req, res)=>{
    userController.GetUserById(req, res);
});   

router.put('/users/:id', (req, res)=>{
    userController.UpdateUser(req, res);
});

module.exports = router;

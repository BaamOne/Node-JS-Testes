const express = require('express');
const router  = express.Router();
const userController = require('../controller/userController.js');

router.post('/users', (req, res)=>{
    userController.CreateUser(req, res);
});
module.exports = router;

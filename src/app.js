const express = require('express');
const userRouter = require('./router/userRouter.js');
const app = express();
const port = 3000;

app.use('/api', userRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
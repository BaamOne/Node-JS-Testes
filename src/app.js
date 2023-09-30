const express = require('express');
const userRouter = require('./router/userRouter.js');
const app = express();
const cors = require('cors'); // Importe o pacote cors
const port = 3000;


// Configurar opções do cors
const corsOptions = {
    origin: 'http://localhost:3001', // Substitua pelo seu domínio de frontend
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With, content-type,XMLHttpRequest,Access-Control-Allow-Origin,Origin,Accept,Access-Control-Allow-Credentials,',
};
  
app.use(cors(corsOptions));
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
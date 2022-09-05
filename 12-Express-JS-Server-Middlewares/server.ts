import express from 'express';
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';
import appLogger from './middlewares/applogger';

const app:express.Application = express();

const hostname : string = '127.0.0.1';
const port : number = 5000;

//config middleware
app.use(appLogger);

//configure express to receive form data

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/',(request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to express JS</h3>`);
});

//router configuration
app.use('/users', userRouter);
app.use('/api', apiRouter);

app.listen(port, hostname,() =>{
    console.log(`express Server is started at http://${hostname}:${port}`);
});
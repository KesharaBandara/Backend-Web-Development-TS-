import express from 'express';
import apiRouter from "./Router/apiRouter";
import userRouter from './Router/userRouter';

const app:express.Application = express();

const hostname : string = '127.0.0.1';
const port : number = 5000;

app.get('/',(request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to express JS</h3>`);
});

//router configuration
app.use('/api', apiRouter);
app.use('/users', userRouter);


app.listen(port, hostname,() =>{
    console.log(`express Server is started at http://${hostname}:${port}`);
});
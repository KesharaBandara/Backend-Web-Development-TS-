import express from 'express';

const apiRouter:express.Router = express.Router();

//logic

apiRouter.get('/',(request:express.Request, response:express.Response)=> {
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to API Router </h3>`);

});



apiRouter.get('/test',(request:express.Request, response:express.Response)=> {
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to API Router Test Path</h3>`);

});

export default apiRouter;
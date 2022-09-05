import express from 'express';

const userRouter:express.Router = express.Router();

//logic

userRouter.get('/',(request:express.Request, response:express.Response)=> {
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to User Router </h3>`);

});



userRouter.get('/test',(request:express.Request, response:express.Response)=> {
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to User Router Test Path</h3>`);

});

export default userRouter;
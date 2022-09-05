import express from 'express';

const userRouter: express.Router = express.Router();

//logic
userRouter.get('/',(request:express.Request, response:express.Response)=> {
    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to User Router </h3>`);

});
//form data
userRouter.post('/login', (request:express.Request, response:express.Response)=>{
        let formData = request.body; //to receive the form data from client
        response.status(200).json({
            msg : 'form Data is received',
            formData : formData
        });
});

export default userRouter;
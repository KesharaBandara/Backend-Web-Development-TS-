import express from 'express';
import {body, validationResult} from 'express-validator';

const userRouter:express.Router = express.Router();

//logic

userRouter.get('/',(request:express.Request, response:express.Response)=> {

    response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color: blue" >Welcome to User Router </h3>`);

});
//fields:name,email,password


userRouter.post('/register', [
    body('name').not().isEmpty().withMessage('Name is Required'),
    body('email').isEmail().withMessage('Proper Email is required'),
    body('password').isLength({min : 5}).withMessage('Min 5 char required')
],async(request:express.Request, response:express.Response)=> {

    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors:errors.array() });
    }

    let{name, email, password} = request.body;
    try{
    response.status(200).json({
        user: {name, email, password},
    });
    }
    catch(error){
        console.error(error);

    }


});

export default userRouter;
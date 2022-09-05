import express, { response } from 'express'

const apiRouter: express.Router = express.Router();

apiRouter.get('/', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color:green">Welcome to API Router </h3>`);
});

apiRouter.get('/test', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3 style="font-family: Lato,sans-serif; color:green">Welcome to API Router </h3>`);
});

export default apiRouter;
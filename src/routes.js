import Router from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import authMiddlewares from './app/middlewares/auth';


const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update)

export default routes;

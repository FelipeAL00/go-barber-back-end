import Router from 'express';
import Multer from 'multer';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import authMiddlewares from './app/middlewares/auth';
import multerConfig from './config/multer';
import FileController from './app/controller/FileController';
import ProviderController from './app/controller/ProviderController';

const routes = new Router();
const upload = Multer(multerConfig);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

export default routes;

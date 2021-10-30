import { Router } from 'express';

import User from './routes/app.routes';

const routes = Router();

routes.use('/user', User);

export default routes;

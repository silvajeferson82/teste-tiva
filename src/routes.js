import { Router } from 'express';

import User from './app/models/Users/routes/users.routes'

const routes = Router();

routes.use('/user', User);

export default routes;

import express from 'express';
import generalRoutes from './routes';
import cors from 'cors';

import 'express-async-errors';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    // this.server.use(routes);

  }
  middlewares(){
    this.server.use(express.json({ limit: "100mb", extended: true  }));
    this.server.use(cors());
  }
  routes() {
    this.server.use(generalRoutes);
  }
}


export default new App().server;

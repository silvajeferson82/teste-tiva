import app from './app';
import 'dotenv/config';

// import express, { Router } from "express";
// import routes from './routes/app.routes';
// import cors from 'cors';

// import './database';


// const routes = new Router();
// const app = express()
// app.use(express.json());
// app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Projeto ${process.env.PROJECT_NAME} rodando em ${process.env.PORT}`)
});


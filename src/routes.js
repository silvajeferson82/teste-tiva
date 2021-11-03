import "dotenv/config";

import { Router } from "express";
import swagerDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import sessionRouter from "./app/models/Users/routes/session.routes";
import usersRouter from "./app/models/Users/routes/users.routes";
import professionalRouter from "./app/models/professionals/routes/professional.routes";
import addressesRouter from "./app/models/Addressses/routes/addresses.routes";

const routes = new Router();

const options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Project Tiva",
      description: "Criado para cárarter avaliatvo do proceso de seleção TIVA",
      contact: {
        email: "jefersonilva.contato@gmail.com",
        name: "Jeferson Silva",
      },
      servers: ["http://localhost:3030"],
    },
    securityDefinitions: {
      JWT: {
        description: "Token",
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
  },
  // ['.routes/*.js']
  apis: ["**/*routes.js"],
};

const swaggerDocs = swagerDoc(options);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes.use("/login", sessionRouter);
routes.use("/users", usersRouter);
routes.use("/professional", professionalRouter);
routes.use("/addresses", addressesRouter);

export default routes;

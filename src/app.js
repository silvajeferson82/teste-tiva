import express from "express";
import cors from "cors";
import path from "path";

import routes from "./routes";

import "./database";

class App {
  constructor() {
    this.server = express();
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp", "uploads")),
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json({ limit: "100mb", extended: true }));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

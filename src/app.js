import express from "express";

class App {
    constructor() {
        this.server = express();
        this.server.use(express.json({ limit: '100mb', extended: true}));
    }
}


export default new App().server;
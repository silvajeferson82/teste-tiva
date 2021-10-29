import Sequelize from "sequelize";
import dbConfig from "../config/database";

import Users from '../models/User';

const models = [ Users ];

class Connection {
  constructor(){
    this.init();
  }
  init(){
    this.Connection = new Sequelize(dbConfig);

    models.forEach(model => model.init(this.Connection));
  }
}

export default new Connection();

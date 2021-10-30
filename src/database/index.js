import Sequelize from "sequelize";
import dbConfig from "../config/database";

import User from '../models/User';

const models = [ User ];

class Connection {
  constructor() {
    this.init();
  }

  init(){
    this.Connection = new Sequelize(dbConfig);

    models.forEach(model => model.init(this.Connection));
  }
}

export { Connection };

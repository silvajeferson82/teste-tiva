import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/Users/entities/User';

const models = [ User, ];

class Connection {
  constructor() {
    this.init();
  }

  init(){
    this.Connection = new Sequelize(dbConfig);

    // models.forEach(model => model.init(this.Connection));
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export { Connection };

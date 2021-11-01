import Sequelize, { Model, DataTypes } from "sequelize";
import bcrypt from "bcryptjs";
import { user } from "pg/lib/defaults";

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          allowNull: false,
          defaultValue: sequelize.fn("uuid_generate_v4"),
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // password: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        tableName: "users",
      }
    );
    return this;
  }
}

export default Users;

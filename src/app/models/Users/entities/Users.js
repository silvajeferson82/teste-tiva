import Sequelize, { Model, DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

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
        contato: {
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
        // password: {
        //   type: Sequelize.VIRTUAL,
        // },
      },
      {
        sequelize,
        tableName: "users",
      },
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Users;

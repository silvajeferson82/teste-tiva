import { Model, DataTypes} from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      admin: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
      },
      password: {
        type:DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'users'
    });
    return this;
  }
}

export { User };

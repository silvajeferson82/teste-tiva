import { Model, DataTypes, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        defaultValue: sequelize.fn('uuid_generate_v4'),
        primaryKey: true,
      },
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
      },
      senha: Sequelize.VIRTUAL,
    },
    {
      sequelize,
      tableName: 'users'
    });
    return this;
  }
};

export default User;

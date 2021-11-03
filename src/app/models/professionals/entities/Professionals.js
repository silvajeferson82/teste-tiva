import Sequelize, { Model, DataTypes } from "sequelize";

class Professionals extends Model {
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
        description: {
          type: DataTypes.STRING,
          allownull: false,
        },
        email: {
          type: DataTypes.STRING,
          allownull: false,
        },
        contato: {
          type: DataTypes.STRING,
          allownull: false,
        },
        foto: {
          type: DataTypes.STRING,
          allownull: true,
          defaultValue: "NULL",
        },
      },
      {
        sequelize,
        tableName: "professionals",
      },
    );
    return this;
  }
}

export default Professionals;

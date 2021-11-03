import Sequelize, { Model, DataTypes } from "sequelize";

class Addresses extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          allowNull: false,
          defaultValue: sequelize.fn("uuid_generate_v4"),
          primaryKey: true,
        },
        cep: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        estado: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cidade: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rua: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        numero: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        profissional_id: {
          type: DataTypes.UUIDV4,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "addresses",
      },
    );
    return this;
  }
}
export default Addresses;

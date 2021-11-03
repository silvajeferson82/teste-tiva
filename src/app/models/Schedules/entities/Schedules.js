import Sequelize, { Model, DataTypes } from "sequelize";

class Schedules extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          allowNull: false,
          defaultValue: sequelize.fn("uuid_generate_v4"),
          primaryKey: true,
        },
        data_inicio: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        data_fim: {
          type: DataTypes.DATEONLY,
          allownull: false,
        },
        hora_inicio: {
          type: DataTypes.STRING,
          allownull: false,
        },
        hora_fim: {
          type: DataTypes.STRING,
          allownull: false,
        },
        professional_id: {
          type: DataTypes.UUIDV4,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "schedule",
      },
    );
    return this;
  }
}

export default Schedules;

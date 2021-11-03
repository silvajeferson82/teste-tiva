module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("schedule", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.fn("uuid_generate_v4"),
        allownull: false,
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_fim: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora_inicio: {
        type: Sequelize.STRING,
        allownull: false,
      },
      hora_fim: {
        type: Sequelize.STRING,
        allownull: false,
      },
      professional_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "professionals", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("schedule");
  },
};

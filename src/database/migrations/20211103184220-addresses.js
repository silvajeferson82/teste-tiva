module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("addresses", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.fn("uuid_generate_v4"),
        allownull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allownull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allownull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allownull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allownull: false,
      },
      rua: {
        type: Sequelize.STRING,
        allownull: false,
      },
      numero: {
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
    await queryInterface.dropTable("addresses");
  },
};

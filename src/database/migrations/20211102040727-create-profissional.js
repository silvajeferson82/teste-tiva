module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("profissional", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.fn("uuid_generate_v4"),
        allownull: false,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      description: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
      },
      contato: {
        type: Sequelize.STRING,
        allownull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allownull: true,
        defaultValue: null,
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
    await queryInterface.dropTable("profissional");
  },
};

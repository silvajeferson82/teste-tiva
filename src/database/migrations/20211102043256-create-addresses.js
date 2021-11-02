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
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      estado: {
        type: Sequelize.STRING,
        allownull: false,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      cidade: {
        type: Sequelize.STRING,
        allownull: false,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      bairro: {
        type: Sequelize.STRING,
        allownull: false,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      rua: {
        type: Sequelize.STRING,
        allownull: false,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      numero: {
        type: Sequelize.STRING,
        allownull: false,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      profissional_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "profissional", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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

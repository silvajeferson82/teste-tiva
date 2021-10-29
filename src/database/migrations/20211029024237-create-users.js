'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allownull: false,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email:{
        type: Sequelize.STRING,
        allownull: false,
      },
      admin :{
        type: Sequelize.BOOLEAN,
        allownull: false,
      },
      password: {
        type: Sequelize.STRING,
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allownull: false,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

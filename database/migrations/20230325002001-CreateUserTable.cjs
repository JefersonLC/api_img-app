'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      lastname: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      token: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
      },
      isVerified: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_verified'
      },
      isAdmin: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_admin'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};

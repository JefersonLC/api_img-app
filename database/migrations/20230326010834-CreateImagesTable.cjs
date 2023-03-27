'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      image: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      userId: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      }
    });

    await queryInterface.addConstraint('images', {
      type: 'foreign key',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('images');
  }
};

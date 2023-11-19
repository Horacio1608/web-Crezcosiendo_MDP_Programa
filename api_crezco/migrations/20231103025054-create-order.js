'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientname: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      phone: {
        type: Sequelize.INTEGER(15),
        allowNull: false
      },
      detail: {
        type: Sequelize.TEXT
      },
      pending: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      idproduct: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
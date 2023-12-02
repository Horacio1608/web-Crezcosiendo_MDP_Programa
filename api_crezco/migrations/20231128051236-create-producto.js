'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      disponible: {
        type: Sequelize.BOOLEAN
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      imagen1: {
        type: Sequelize.STRING,
        allowNull: false,
        },
      imagen2: {
          type: Sequelize.STRING,
          allowNull: false,
          },
      imagen3: {
        type: Sequelize.STRING,
        allowNull: false,
        },
      imagen4: {
        type: Sequelize.STRING,
        allowNull: false,
        },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Productos');
  }
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formulario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Formulario.init({
    name: DataTypes.STRING(125),
    email: DataTypes.STRING(125),
    number: DataTypes.INTEGER(20),
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Formulario',
  });
  return Formulario;
};
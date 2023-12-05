'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {

    }
      
  }
  Producto.init({
    disponible: DataTypes.BOOLEAN,
    titulo: DataTypes.STRING(125),
    precio: DataTypes.FLOAT(10),
    imagen1: DataTypes.STRING,
    imagen2: DataTypes.STRING,
    imagen3: DataTypes.STRING,
    imagen4: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};

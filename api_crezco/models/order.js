'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.product, { foreignKey: 'id' })
    }
  }
  order.init({
    clientname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    pending: DataTypes.BOOLEAN,
    idproduct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
   
  //asocio las tablas de order con product
  
  //User.asociate = function(models) {
   // order.belongsTo(models.product);
  //}
  

  //return order;
  
};
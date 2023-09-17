'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.hasMany(models.Variant);
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      is_published: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};

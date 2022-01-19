'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  testTable.init({
    surah: DataTypes.STRING,
    totalAyat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'testTable',
  });
  return testTable;
};
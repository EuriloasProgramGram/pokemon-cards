'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    health: DataTypes.STRING,
    type: DataTypes,
    type2,
    pokemon_image,
    move_type,
    second_move_type,
    skill,
    damage,
    move_type2,
    second_move_type2,
    skill2,
    damage2,
    weakness,
    resist,
    retreat,
    retreat_cost
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};
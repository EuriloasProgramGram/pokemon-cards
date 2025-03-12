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
    type: DataTypes.STRING,
    type2: DataTypes.STRING,
    pokemon_image: DataTypes.STRING,
    move_type :DataTypes.STRING,
    second_move_type: DataTypes.STRING,
    skill: DataTypes.STRING,
    damage:DataTypes.INTEGER,
    move_type2: DataTypes.STRING,
    second_move_type2:DataTypes.STRING,
    skill2:DataTypes.STRING,
    damage2:DataTypes.INTEGER,
    weakness:DataTypes.STRING,
    resist:DataTypes.STRING,
    retreat:DataTypes.STRING,
    retreat_cost:DataTypes.INTEGER,
    ptype: DataTypes.STRING,
    ptype2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemons',
    timestamps: false,
  });
  return Pokemon;
};
   var express = require('express');
var router = express.Router();
const {Pokemon} = require('../models');
const types =['electric', 'water', 'ghost', 'normal', 'fire', 'grass']
module.exports.viewAll = async function(req, res, next) {
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons});
}
module.exports.renderEditForm = async function(req, res, next) {
    const pokemon = await Pokemon.findBypk(
        req.params.id
    );
    res.render('edit', {pokemon, types});
}
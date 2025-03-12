   var express = require('express');
var router = express.Router();
const {Pokemon} = require('../models');
module.exports.viewAll = async function(req, res, next) {
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons});
}

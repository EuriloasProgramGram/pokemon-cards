var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController');

/* GET home page. */
router.get('/', pokemonController.viewAll);
router.get('/edit/:id', pokemonController.renderEditForm)
module.exports = router;
   var express = require('express');
var router = express.Router();
const {Pokemon} = require('../models');
const ptypes =['electric', 'water', 'steel', 'normal', 'fire', 'grass']
const ptypes2 =['electric2', 'water2', 'steel2', 'normal2', 'fire2', 'grass2']
const types =['','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx5f-e4595600-3e33-4241-9b2b-74aaa2eef412.png/v1/fill/w_895,h_893/water_energy_card_vector_symbol_by_biochao_dezrx5f-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cng1Zi1lNDU5NTYwMC0zZTMzLTQyNDEtOWIyYi03NGFhYTJlZWY0MTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7SbyLKwiuihvL8f8Xs5D301oKDuaS2kGu_fqIZAtWf4', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx16-513fe1dd-38ed-427b-bd33-f06c814bf32f.png/v1/fill/w_1280,h_1278/electric_energy_card_vector_symbol_by_biochao_dezrx16-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cngxNi01MTNmZTFkZC0zOGVkLTQyN2ItYmQzMy1mMDZjODE0YmYzMmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.U_F136VX-qaPr4LEg6He5GnACg1E5NsYhX9uRrmS_Ro', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx4z-608133ef-0158-48f9-8786-b8a39fd7e97f.png/v1/fill/w_1280,h_1277/steel_energy_card_vector_symbol_by_biochao_dezrx4z-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3NyIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cng0ei02MDgxMzNlZi0wMTU4LTQ4ZjktODc4Ni1iOGEzOWZkN2U5N2YucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HnQnbDYdY8dawx4dRmwVyYcjTXes-fA7zKEwHyo0wyo', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrwzj-a0900a9f-ecf0-4ff5-8626-83335695a144.png/v1/fill/w_893,h_895/colorless_energy_card_vector_symbol_by_biochao_dezrwzj-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MiIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cnd6ai1hMDkwMGE5Zi1lY2YwLTRmZjUtODYyNi04MzMzNTY5NWExNDQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9S9g3jnHB8TZRxq2wEGWby-taGyQgANagbZQz7URvh0', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx2m-6a187f20-c54f-443c-abb5-6304a14d1d39.png/v1/fill/w_1280,h_1278/fire_energy_card_vector_symbol_by_biochao_dezrx2m-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cngybS02YTE4N2YyMC1jNTRmLTQ0M2MtYWJiNS02MzA0YTE0ZDFkMzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MrtaX3vm446Kd5jU02FfLdjMSyXljqW0ahnU8jEo0aE', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx3b-faf247b4-bbcf-4a1d-bba4-47236408df42.png/v1/fill/w_895,h_893/grass_energy_card_vector_symbol_by_biochao_dezrx3b-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cngzYi1mYWYyNDdiNC1iYmNmLTRhMWQtYmJhNC00NzIzNjQwOGRmNDIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oOHbZYJsNszy_P66CbLaiuRVY8kFzjJvvxQ0tZkF3BM']
   module.exports.viewAll = async function(req, res, next) {
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons});
}
module.exports.renderEditForm = async function(req, res, next) {
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon, types, ptypes});
}
module.exports.updatePokemon = async function(req, res) {
    await Pokemon.update(
        {
            name: req.body.name,
            health: req.body.health,
            type: req.body.type,
            type2: req.body.type2,
            ptype: req.body.ptype,
            ptype2: req.body.ptype2,
            pokemon_image: req.body.pokemon_image,
            move_type: req.body.move_type,
            second_move_type: req.body.second_move_type,
            skill: req.body.skill,
            damage: req.body.damage,
            move_type2: req.body.move_type2,
            second_move_type2: req.body.second_move_type2,
            skill2: req.body.skill2,
            damage2: req.body.damage2,
            weakness: req.body.weakness,
            resist: req.body.resist,
            retreat: req.body.retreat
        },
        {
            where:
            {
                id: req.params.id
            }
        });
        res.redirect('/');
}
module.exports.deletePokemon = async function(req, res) {
    await Pokemon.destroy(
        {
            where: {
                id: req.params.id
            }
        });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res) {
    const pokemon = {
        name:"",
        health: "",
        type: types[0],
        type2: types[0],
        ptype: ptypes[0],
        ptype2: ptypes2[0],
        pokemon_image: "",
        move_type: "",
        second_move_type: "",
        skill: "",
        damage: 0,
        move_type2: "",
        second_move_type2:"",
        skill2: "",
        damage2: 0,
        weakness: "",
        resist: "",
        retreat:""
    };
    res.render('add', {pokemon, ptypes, types});
}

module.exports.addPokemon = async function(req, res) {
    await Pokemon.create(
        {
            name: req.body.name,
            health: req.body.health,
            type: req.body.type,
            type2: req.body.type2,
            ptype: req.body.ptype,
            ptype2: req.body.ptype2,
            pokemon_image: req.body.pokemon_image,
            move_type: req.body.move_type,
            second_move_type: req.body.second_move_type,
            skill: req.body.skill,
            damage: req.body.damage,
            move_type2: req.body.move_type2,
            second_move_type2: req.body.second_move_type2,
            skill2: req.body.skill2,
            damage2: req.body.damage2,
            weakness: req.body.weakness,
            resist: req.body.resist,
            retreat: req.body.retreat
        });
    res.redirect('/');
}
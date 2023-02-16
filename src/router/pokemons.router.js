const { Router } = require("express");
const { 
  findAllPokemons, 
  findPokemon, 
  createPokemon, 
  updatePokemon, 
  deletePokemon } = require("../controllers/pokemons.controller");

const routerPokemons = Router()

//metodos para mi ruta
routerPokemons.get('/', findAllPokemons)
routerPokemons.get('/:id', findPokemon)
routerPokemons.post('/', createPokemon)
routerPokemons.patch('/:id', updatePokemon)
routerPokemons.delete('/:id', deletePokemon)

module.exports = {
  routerPokemons
} 
const Pokemon = require("../models/pokemons.model")

exports.findAllPokemons = async (req, res) => {
  try {
    res.status(200).json({
      status: "success findAll"
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error"
    })
  }
}

exports.findPokemon = async (req, res) => {
  try {
    res.status(200).json({
      status: "success find"
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error"
    })
  }
}

exports.createPokemon = async (req, res) => {
  try {
    const {name, image} = req.body
    const pokemon = await Pokemon.create({name, image})

    res.status(200).json({
      status: "success created",
      messagge: "pokemon created successfully",
      pokemon,
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error"
    })
  }
}

exports.updatePokemon = async (req, res) => {
  try {
    res.status(200).json({
      status: "success updated"
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error"
    })
  }
}

exports.deletePokemon = async (req, res) => {
  try {
    res.status(200).json({
      status: "success deleted"
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error"
    })
  }
}
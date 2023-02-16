const express = require("express")
const cors = require("cors")
const {routerPokemons} = require("../router/pokemons.router") 
const { db } = require("../database/conect")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // Paths de las rutas 
    this.paths = {
      pokemons: "/api/v1/pokemons"
    }

    this.router()

    this.middlewares()
    
    //conection to database
    this.database() 

  }
  
  database() {
    db.authenticate()
      .then(() => console.log(`database authenticated`))
      .catch(err => console.log(err))
    
    db.sync({force: true})
      .then(() => console.log(`database synced`))
      .catch(err => console.log(err))
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  router() {
    this.app.use(this.paths.pokemons, routerPokemons)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server listening in port ${this.port}`)
    })
  }
}

module.exports = Server
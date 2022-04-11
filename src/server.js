const path = require("path")

require("dotenv").config({
  path: process.env.NODE_ENV == "prod" ?
    path.resolve(__dirname, "environment/.env.production") :
    path.resolve(__dirname, "environment/.env")

})

const config = require("./config")
const express = require("express")
const app = express()


console.log(config)
console.log("conectando a mongo: ", config.MONGOURI)

app.get("/info", (req, res) => {
  res.send("OK")
})

app.listen(config.PORT, () => console.log(`listening on http://localhost:${config.PORT}`))



// "server-dev": "node -r dotenv/config ./src/server.js dotenv_config_path=./src/environment/.env "
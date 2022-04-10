const path = require("path")
require("dotenv").config({
  path: path.resolve(__dirname, "production.env")
})

const express = require("express")
const app = express()
const config = require("./config")

console.log(config)
console.log("conectando a mongo: ", config.MONGOURI)

app.get("/info", (req, res) => {
  res.send("OK")
})

app.listen(config.PORT, () => console.log(`listening on http://localhost:${config.PORT}`))
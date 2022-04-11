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
  console.log(process)
  res.send({ 
    args: process.argv,
    uptime: process.uptime(),
    platform: process.platform,
    arch: process.arch,
    version: process.version,
    pid: process.pid,
    path: process.execPath,
    projectPath: process.cwd()
   })
})

app.get("/end", (req, res) => {
  res.send("el proceso acaba despues de aqui")
  process.exit(1)
})

app.get("/error", (req, res) => {
  res.send("se lanzo una excepcion")

  throw new Error("excepcion inesperada")
})


process.on("uncaughtException", (err) => {
  process.stdout.write("escribir log")
  console.log("err: ", err)
})

// process.on("exit", () => {
//   console.log("me ejecuto cuando ya voy a terminar")
//   console.log("no hay manera de ejecutar llamadas asincronas")
// })

app.listen(config.PORT, () => console.log(`listening on http://localhost:${config.PORT}`))

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});
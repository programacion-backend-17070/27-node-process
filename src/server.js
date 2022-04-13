const path = require("path")
require("dotenv").config({
  path: path.resolve(__dirname, "production.env")
})

const server = require("http").createServer()
const { fork } = require("child_process")
const config = require("./config")
const contarHasta9billones = require("./contar")

console.log(config)
console.log("conectando a mongo: ", config.MONGOURI)

server.on('request', (req, res) => {
  const { url } = req
  if (url == "/info") {
    // console.log(process)
    res.end(JSON.stringify({ 
      args: process.argv,
      uptime: process.uptime(),
      platform: process.platform,
      arch: process.arch,
      version: process.version,
      pid: process.pid,
      path: process.execPath,
      projectPath: process.cwd()
     }))
  } else if (url == "/end") {
    res.end("el proceso acaba despues de aqui")
  process.exit(1)
  } else if (url == "/error") {
    res.end("se lanzo una excepcion")

    throw new Error("excepcion inesperada")
  } else if (url == "/long") {
    console.time("suma")
    const suma = fork(__dirname + '/contar.js')
    suma.send('start')
    suma.on("message", sum => {
      res.end(sum.toString())
    })
    
    console.timeEnd("suma")
  } else {
    res.end("cannot get")
  }
})

process.on("exit", () => {
  console.log("me ejecuto cuando ya voy a terminar")
  console.log("no hay manera de ejecutar llamadas asincronas")
})

server.listen(config.PORT, () => console.log(`listening on http://localhost:${config.PORT}`))

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on("uncaughtException", (err) => {
  console.log("uncaughtException")
  process.stdout.write("escribir log@\n")
  console.log("err: ", err)
})
const path = require("path")
const { fork } = require("child_process")

require("dotenv").config({
  path: process.env.NODE_ENV == "prod" ?
    path.resolve(__dirname, "environment/.env.production") :
    path.resolve(__dirname, "environment/.env")

})

const config = require("./config")
const server = require("http").createServer()

console.log(config)
console.log("conectando a mongo: ", config.MONGOURI)

// EventEmitter
process.on("exit", (code) => {
  console.log(`El proceso finalizo con codigo: ${code}`)
})

process.on("beforeExit", () => {
  console.log("before")
})

process.on("uncaughtException", (err) => {
  console.error("un error occurio", err)
})

server.on("request", (req, res) => {
  const { url } = req
  if(url === "/info") {
    res.end(JSON.stringify({ 
      args: process.argv,
      uptime: process.uptime(),
      platform: process.platform,
      arch: process.arch,
      version: process.version,
      pid: process.pid,
      path: process.execPath,
      projectPath: process.cwd(),
      cpuUsage: process.cpuUsage(),
      memoryUsage: process.memoryUsage()
     }))
  } else if (url === "/end") {
    res.end("servicio apagado")
    process.exit()
  } else if (url === "/error") {
    res.end("voy a lanzar un error")
    throw new Error("soy un error")
  } else if (url === "/suma") {
    console.time("/suma")
    const sum = fork(__dirname + "/suma.js")
    sum.send("inicio")
    sum.on("message", (sum) => {
      res.end(sum.toString())
    })
    console.timeEnd("/suma")
  } else {
    res.end("notfound")
    process.stdout.write("hola soy un string enviado por stream\n")
    // stream flujo continuo de datos -> API de flujo
  }
})

server.listen(config.PORT, () => console.log(`listening on http://localhost:${config.PORT}`))



// "server-dev": "node -r dotenv/config ./src/server.js dotenv_config_path=./src/environment/.env "
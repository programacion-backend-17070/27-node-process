process.on("exit", (code) => {
  console.log(`El proceso finalizo con codigo: ${code}`)
})

process.on("beforeExit", () => {
  console.log("before")
})


const args = process.argv.slice(2)
const response = { code : 0 }

console.log(args)

if (!args.length) {
  response.error = {
    descripcion: 'datos invalidos',
  }
  response.code = -4

  console.log(JSON.stringify(response, null, 2))
  process.exit(response.code)
}
// args.some(n => !n.match(/^\d+$/)) -- usando expresion regular
// args.some(n => typeof(Number(n)) !== "number") -- usando typeof

if (args.some(n => !n.match(/^\d+$/))) {
  response.error = {
    descripcion: "error de tipo",
    numeros: args
  }
  response.code = -5
  console.log(JSON.stringify(response, null, 2))
  process.exit(response.code)
}

const sorted = args.map(n => +n).sort((a, b) => a - b)

response.datos = {
  numeros: args,
  promedio: sorted.reduce((total, num) => total + num) / sorted.length,
  max: sorted[sorted.length - 1],
  min: sorted[0],
  ejecutable: process.execPath,
  pid: process.pid
}

console.log(JSON.stringify(response, null, 2))
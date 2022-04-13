const args = process.argv.slice(2)
const response = {
  code: 0
}


if (!args.length) {
  response.error = { description: 'entrada vacia' }
  response.code = -4
} else if (args.some(n => !n.match(/^\d+$/))) {
  response.error = {
    description: "error de tipo",
    numeros: args,
    tipos: args.map(n => typeof (+n))
  }
  response.code = -5
} else {
  const sorted = args.sort((a, b) => a - b)
  console.log(args.reduce((total, num) => +total + +num))
  response.datos = {
    numeros: args,
    promedio: args.reduce((total, num) => total + Number(num), 0) / args.length,
    max: sorted[args.length - 1],
    min: sorted[0],
    ejecutable: process.argv[1],
    pid: process.pid
  }
}

console.log(JSON.stringify(response, null, 2))
process.exit(response.code)
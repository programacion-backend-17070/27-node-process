const parseArgs = require("minimist")
const { print } = require("./utils")

module.exports = () => {
  const args = parseArgs(process.argv.slice(2))

  console.log(args)

  // Un CLI que tenga como parametros dos numeros o mas (-n) e imprima la suma de estos
  // Si en la linea de comandos se envia un flag -m o --multiplication, el programa imprime la multiplicacion

  // 5, 6, 1, 4
  const result = args.n.reduce((total, num) => {
    if (args.m || args.multiplication) {
      return total * num
    }
    
    return total + num
  })

  print(result)
}
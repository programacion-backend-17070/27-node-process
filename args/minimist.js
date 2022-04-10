const parseArgs = require("minimist")
const { print } = require("./util")

module.exports = async function () {
  const args = parseArgs(process.argv.slice(2))

  // console.log(args)

  // -n 1 { n: 1}
  // -n 1 -n 2 { n: [1, 2] }
  // -n 1 hola { n: 1, _: ['hola'] }
  // -n 1 -f { n: 1, f: true }
  // -n 1 --multiplication { n: 1, multiplication: true }

  // Un CLI que tenga como parametros dos numeros e imprima la suma de estos
  // Si en la linea de comandos se envia un flag -m o --multiplication, el programa imprime la multiplicacion

  const result = args.n.reduce((total, num) => {
    if (args.multiplication) {
      return total * num
    } else {
      return total + num
    }
  })


  await print(result)
}
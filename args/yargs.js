const parseArgs = require('yargs/yargs')
const { print, errorAndExit } = require("./util")

module.exports = async function () {
  const args = parseArgs(process.argv.slice(2))
    .option('num', {
      alias: 'n',
      describe: 'list of numbers',
      array: true
    })
    .option('operation', {
      alias: 'o',
      describe: "operation to perform",
      choices: ['s', 'r', 'm', 'd']
    }).argv

  // Un CLI que tenga como parametros una lista de numeros -n y una operacion -o
  // La operacion va a determinar que se hara suma (s), resta(r), multiplicacion (m), division (d)

  const { n, o } = args

  // console.log(args)

  const result = n.reduce((total, num) => {
    if (o == "m") {
      return total * num
    } else if (o == "s") {
      return total + num
    } else if (o == "r") {
      return total - num
    } else if (o == "d") {
      if (total == 0) {
        errorAndExit("No se puede dividir entre 0")
      }

      return total / num
    }
  })


  await print(result)
}
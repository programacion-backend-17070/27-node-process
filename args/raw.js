const { print } = require("./utils")
module.exports = () => {
  const args = process.argv.slice(2)

  // {
  //  nombre: 10
  //  nombre2: 2
  // }

  for (const arg of args) {
    console.log(arg)
  }

  const [num1, num2] = args

  if (!num1 || !num2) {
    console.log("falta uno o mas numeros")
    return
  }

  // Number(num1)
  // parseInt(num1)
  // 10 + 2 = 102
  print(`La suma es: ${+num1 + +num2}`)
}

// node archivo param1 param2
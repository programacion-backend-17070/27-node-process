const args = process.argv.slice(2)

for (const arg of args) {
  console.log(arg)
}

const [ num1, num2 ] = args

if (!num1 || !num2) {
  console.log("falta uno o mas parametros")
}

console.log(`La suma es: ${ +num1 + +num2 }`)
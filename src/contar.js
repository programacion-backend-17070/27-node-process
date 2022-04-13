const calcular = () => {
  let sum = 0;
  for (let i = 0; i <9e9; i++) {
    sum += i
  }

  return sum
}

process.on("message", (message) => {
  if (message == 'start') {
    console.log("empezando la cuenta")
    const suma = calcular()
    process.send(suma)
    console.log("suma enviada")
    process.exit()
  }
})
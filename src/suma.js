const suma  = () => {
  console.time("suma")
  let suma = 0;
  for (let i = 0; i< 8e9; i++) {
    suma += i
  }

  console.timeEnd("suma")

  return suma
}

process.on("message", msg => {
  if (msg === "inicio") {
    const sum = suma()
    process.send(sum)
    console.log("suma enviada")
    process.exit()
  }
})
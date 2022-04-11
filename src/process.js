console.log("soy una operacion")


process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on("exit", () => {
  console.log("me ejecuto cuando ya voy a terminar")
  console.log("no hay manera de ejecutar llamadas asincronas")
})

// aEsMayorQueB = <statement> ?  cuando true : cuando es false

process.exit(-1)

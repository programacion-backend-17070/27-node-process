console.log("soy una operacion")

process.on('uncaughtException', (err) => {
  console.log('uncaughtException')
  console.log(err)
})

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on("exit", () => {
  console.log("me ejecuto cuando ya voy a terminar")
  console.log("no hay manera de ejecutar llamadas asincronas")
})

process.exit(-1)

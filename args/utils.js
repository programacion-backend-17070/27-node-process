const { createSpinner } = require('nanospinner')
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
module.exports = {
  print: async (txt) => {
    const spinner = createSpinner("...\n").start()
    await sleep()
    spinner.success({ text: `La respuesta es ${txt}`})
  },
  errorAndExit: (txt) => {
    const spinner = createSpinner("...\n").start()
    spinner.error({ text: `Error ${txt}`})
    process.exit(1)
  }
}
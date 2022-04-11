const parseArgs = require("yargs/yargs")
const { print, errorAndExit } = require("./utils")

module.exports = () => {

  const args = parseArgs(process.argv.slice(2))
    .option("num", {
      alias: "n",
      describe: "list of numbers",
      array: true
    })
    .option("operation", {
      alias: "o",
      describe: "operation to perform",
      choices: ["s", "r", "m", "d"]
    }).argv

    const { num, operation } = args

    const result = num.reduce((total, num) => {
      if (operation === "m") {
        return total * num
      } else if (operation === "s") {
        return total + num
      } else if (operation === "r") {
        return total - num
      } else {
        if (total === 0) {
          errorAndExit("No se puede dividir en 0")
        }
        return total / num
      }
    })

    print(result)
}
const { spawn } = require("child_process")

const python = spawn(__dirname + '/scripts/timer.py')
const git = spawn("git", ["status"])

// python.on("data", data => {
//   // console.log(data.toString())
//   process.stdout.write(data)
// })

// python.on("data", data => {
//   console.log(data.toString())
// })

// python.stdout.pipe(process.stdout)
git.stdout.pipe(process.stdout)
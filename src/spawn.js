const { spawn } = require("child_process")

const git = spawn("git", ["status"])

git.stdout.on("data", data => console.log(data.toString()))

const python = spawn(__dirname + "/scripts/timer.py")

python.stdout.pipe(process.stdout)

// python.stdout.on("data", data => console.log(data.toString()))
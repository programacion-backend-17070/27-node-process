const { execFile } = require("child_process")

execFile(__dirname + "/scripts/hello.py", (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }

  if (stderr) {
    console.error(stderr)
  }

  console.log(stdout)
})

console.log("yo sigo despues")
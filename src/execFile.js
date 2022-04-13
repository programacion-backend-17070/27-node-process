const { execFile } = require("child_process")

execFile(__dirname + "/scripts/hello.py", (err, stdout, stderr) => {
  if (err) {
    console.log(err)
    return
  }

  if (stderr) {
    console.log(stderr)
    return
  }

  console.log(stdout)
})
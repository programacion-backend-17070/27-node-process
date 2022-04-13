const { exec } = require("child_process")

exec('pwd', (err, stdout, stderr) => {
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
const express = require("express")
const { PORT } = require("./config")
const app = express()

app.get("/", (req, res) => {
  res.send("ok")
})

app.listen(PORT, console.log(PORT))
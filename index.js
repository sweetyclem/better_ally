
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require('express')
const port = process.env.PORT
const app = express()

app.listen(port, function () {
  console.log(`Listening on ${port}`)
})

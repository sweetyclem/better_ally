
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require('express')
const port = process.env.PORT
const app = express()
const events = require('./events')
const interactions = require('./interactions')
const slashCommand = require('./slashCommand')

events.listenForEvents(app)
interactions.listenForInteractions(app)
slashCommand.listenForCommands(app)
app.listen(port, function () {
  console.log(`Listening on ${port}`)
})

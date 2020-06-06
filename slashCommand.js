const bodyParser = require('body-parser');
const subjects = require('./elements/subjects.json')
const cors = require('cors')

module.exports.listenForCommands = async function (app) {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.post('/commands', (req, res) => {
    const { token, user_id, channel_id } = req.body
    console.log(`Received a slash command from user ${user_id} in channel ${channel_id}`)

    if (token !== process.env.SLACK_VERIF_TOKEN) {
      console.log('Invalid token')
      return
    }

    res.status(200).send({ attachments: [subjects] }
    )
  })
}

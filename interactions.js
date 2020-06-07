const { createMessageAdapter } = require('@slack/interactive-messages')
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackInteractions = createMessageAdapter(slackSigningSecret)
const articleOrBookButton = require('./elements/articleOrBookButton.json')
const respondToButtons = require('./respondToButtons')

module.exports.listenForInteractions = function (app) {
  app.use('/interactions', slackInteractions.requestListener())
}

slackInteractions.action({ type: 'select' }, (payload, respond) => {
  respondToSelectDropdown(payload, respond)
})

slackInteractions.action({ type: 'button' }, (payload, respond) => {
  respondToButtons.respond(payload, respond)
})

function respondToSelectDropdown(payload, respond) {
  const selectedOption = payload.actions[0].selected_options[0].value

  if (payload.callback_id == 'subjects') {
    switch (selectedOption) {
      case 'anti_racism':
        text = 'You selected anti racism.'
        callbackId = 'anti_racism_article_book'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
      case 'anti_sexism':
        text = 'You selected anti sexism.'
        callbackId = 'anti_sexism_article_book'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
      case 'lgbtq_allyship':
        text = 'You selected LGBTQ+ Allyship.'
        callbackId = 'lgbtq_allyship_article_book'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
      case 'autism_allyship':
        text = 'You selected autism allyship.'
        callbackId = 'autism_allyship_article_book'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
    }
  }
  // Return a replacement message
  return { text: 'Processing...' }
}

function respondWithArticleOrBookNoButton(text, callbackId, respond) {
  articleOrBookButton.callback_id = callbackId
  articleOrBookButton.text = 'Do you prefer an article or a book?'
  respond({
    text: text,
    attachments: [articleOrBookButton],
    replace_original: true
  })
}

const { createMessageAdapter } = require('@slack/interactive-messages')
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackInteractions = createMessageAdapter(slackSigningSecret)
const articleOrBookButton = require('./elements/articleOrBookButton.json')

module.exports.listenForInteractions = function (app) {
  app.use('/interactions', slackInteractions.requestListener())
}

slackInteractions.action({ type: 'select' }, (payload, respond) => {
  respondToSelectDropdown(payload, respond)
})

slackInteractions.action({ type: 'button' }, (payload, respond) => {
  respondToButton(payload, respond)
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
        text = 'You selected LGBTQ Allyship.'
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

function respondToButton(payload, respond) {
  console.log('selectedOption: ', payload.actions[0].value)

  switch (payload.callback_id) {
    case 'anti_racism_article_book':
      respondToAntiRacismButton(payload.actions[0].value, respond)
      break
    case 'anti_sexism_article_book':
      respondToAntiSexismButton(payload.actions[0].value, respond)
      break
    case 'lgbtq_allyship_article_book':
      respondToLgbtqAllyshipButton(payload.actions[0].value, respond)
      break
    case 'autism_allyship_article_book':
      respondToAutismAllyshipButton(payload.actions[0].value, respond)
      break
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

function respondToAntiRacismButton(selectedOption, respond) {
  const antiRacismArticle = require('./resources/antiRacismArticle.json')
  const antiRacismBook = require('./resources/antiRacismBook.json')

  if (selectedOption == 'article') {
    respond({
      blocks: antiRacismArticle,
      replace_original: true
    })
  }
  else {
    respond({
      blocks: antiRacismBook,
      replace_original: true
    })
  }
}

function respondToAntiSexismButton(selectedOption, respond) {
  const antiSexismArticle = require('./resources/antiSexismArticle.json')
  const antiSexismBook = require('./resources/antiSexismBook.json')

  if (selectedOption == 'article') {
    respond({
      blocks: antiSexismArticle,
      replace_original: true
    })
  }
  else {
    respond({
      blocks: antiSexismBook,
      replace_original: true
    })
  }
}

function respondToLgbtqAllyshipButton(selectedOption, respond) {
  const lgbtqAllyshipArticle = require('./resources/lgbtqAllyshipArticle.json')
  const lgbtqAllyshipBook = require('./resources/lgbtqAllyshipBook.json')

  if (selectedOption == 'article') {
    respond({
      blocks: lgbtqAllyshipArticle,
      replace_original: true
    })
  }
  else {
    respond({
      blocks: lgbtqAllyshipBook,
      replace_original: true
    })
  }
}

function respondToAutismAllyshipButton(selectedOption, respond) {
  const autismAllyshipArticle = require('./resources/autismAllyshipArticle.json')
  const autismAllyshipBook = require('./resources/autismAllyshipBook.json')

  if (selectedOption == 'article') {
    respond({
      blocks: autismAllyshipArticle,
      replace_original: true
    })
  }
  else {
    respond({
      blocks: autismAllyshipBook,
      replace_original: true
    })
  }
}

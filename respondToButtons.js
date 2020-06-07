function respond(payload, respond) {
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

module.exports.respond = respond

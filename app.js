'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAW7z3FpocsBAIzOF097duuMqD3nyZCLf6c60jwdRW6HnAmIt2BZAJEPOWvzNhVReZAwDdnuMaQzAbZCkqb7lZC94c2VOhfDMsdnpaOXkYxnFcVXEhTrrz6XuGzDuC1yzTvn9LpGYhfDZAZApsxomPOLiJaPQUnOFDaIUBtJAEFrgZDZD',
  verify: 'VERIFY_TOKEN',
  app_secret: 'a0abb0e219521d3d8133f63d0dcc5050'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  if (text == "set up a reminder for me"){
    return reply({text: 'Sure, what do you want reminded?'})
  }
  else {
    return reply({text: 'lol wut? say that again plz'})
  }
  /* create element for the reply buttons
  let element = {
  title: song.title,
  subtitle: song.artist,
  image_url: song.album_art || null,
  buttons: []
  }
  */

  /* actually reply using the elms. Each elem will be a card. 
  reply({
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: [element]
      }
    }
  })
  */
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')

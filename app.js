'use strict'
const http = require('http')
const Bot = require('messenger-bot')
var later = require('later'); //https://bunkat.github.io/later/

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

  if (text == "remind me"){
    var textSched = later.parse.text('5 sec');
    reply({text: 'Sure thing boss'})
    later.setTimeout(reply({text: "here's your reminder: "+text}),
     textSched);
  }
  else {
    return reply({text: 'Sorry, I didn\'t quite get that'})
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

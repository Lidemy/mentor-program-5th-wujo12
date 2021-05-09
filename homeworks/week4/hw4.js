const request = require('request')

request(
  {
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      'Client-ID': 'utwdjt9fvf71p3hpyhf0i3a5626fry',
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  },
  (err, res, body) => {
    if (err) return console.log('抓取失敗')
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    const games = data.top
    for (const game of games) {
      console.log(`${game.viewers} ${game.game.name}`)
    }
  })

const request = require('request')
const process = require('process')

const apiUrl = 'https://restcountries.eu/rest/v2/name/'
const searchCountry = process.argv[2]

request(apiUrl + searchCountry,
  (err, response, body) => {
    if (err) {
      console.log('找不到資訊', err)
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    if (data.status === 404) {
      console.log('找不到國家資訊')
    }
    for (let i = 0; i < data.length; i++) {
      console.log('=============')
      console.log(`國家：' ${data[i].name}`)
      console.log(`首都：' ${data[i].capital}`)
      console.log(`貨幣：' ${data[i].currencies[0].code}`)
      console.log(`國碼：' ${data[i].callingCodes}`)
    }
  })

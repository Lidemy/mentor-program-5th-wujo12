const request = require('request')
const process = require('process')

const apiUrl = 'https://restcountries.eu/rest/v2/name/'
const countryName = process.argv[2]

request(apiUrl + countryName,
  (err, res, body) => {
    if (err) {
      console.log('找不到資訊', err)
      return
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    if (res.statusCode >= 400 && res.statusCode < 500) {
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

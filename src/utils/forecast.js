const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1530c5887c97804662d1e9406b1e656f&query=' + latitude + ',' + longitude
    // const url='http://api.weatherstack.com/current?access_key=1530c5887c97804662d1e9406b1e656f&query=42.2781,-74.916';
   
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.temperature + ' It is currently ' + body.location.country + ' degress out. There is a ' + body.location.localtime + '% chance of rain.')
        }
 
         console.log(latitude,longitude);
        // const dailyData=body
        // console.log(dailyData);
        // console.log(dailyData);
        
    })
}

module.exports = forecast
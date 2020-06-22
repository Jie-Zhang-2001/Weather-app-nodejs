const request = require('request');
const utils = require('./utils.js');
const address = process.argv[2];

if (!address) {
    console.log('Please provide an address!');
} else {
    utils.geocode(address, (err, { Lat, Lon, Location } = {}) => {
        if (err) {
            return console.log("Error: ", err);
        }

        utils.forecast(Lon, Lat, (error, forecast) => {
            if (error) {
                return console.log("Error: ", error);
            }
            console.log('Data: ' + Location + ' ' + forecast);

        })
    });
}




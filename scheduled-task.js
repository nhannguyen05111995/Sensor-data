const axios = require('axios')
require("dotenv").config()
const LastEvent = require('./models/last-event');

var cron = require('node-cron');
var task = cron.schedule('0 */45 * * * *', () =>  {
    axios
    .get("https://opendata.hopefully.works/api/events", {
        headers: {
            "Authorization": `Bearer ${process.env.TOKEN}`
        }
    })
    .then((response) => {
        LastEvent.findOne({ date: response.data.date }).then(
            function (data) {
                if (!data) {
                    const lastEvent = new LastEvent(response.data);
                    lastEvent.save();
                }
            },
            function (error) {
                console.log(error)

            }
        );;

    })
    .catch((error) => {
        console.log(error)

    })
}, {
  scheduled: false
});

module.exports = task
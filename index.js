const express = require('express')
const axios = require('axios')
const app = express();
const path = require("path")
const port = process.env.PORT || 3000
require("dotenv").config()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/event', (req, res) => {
    try {
        axios
            .get("https://opendata.hopefully.works/api/events", {
                headers: {
                    "Authorization": `Bearer ${process.env.TOKEN}`
                }
            })
            .then((response) => {
                res.status(200).json({ success: true, data: response.data });

            })
            .catch((error) => {
                console.log(error)
                res.status(400).json({ success: false, error });

            })
    }
    catch (error) {
        res.status(400).json({ success: false, error });
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

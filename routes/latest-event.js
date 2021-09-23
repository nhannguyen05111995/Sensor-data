const express = require('express')
const axios = require('axios')
const router = express.Router();
require("dotenv").config()


router.get('/', (req, res) => {
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

module.exports = router
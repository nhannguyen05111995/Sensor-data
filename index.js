const express = require('express')
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const lastEventRouter = require('./routes/last-event')
const latestEventRouter = require('./routes/latest-event')
const scheduledTask = require('./scheduled-task')
scheduledTask.start()

const port = process.env.PORT || 3000

require("dotenv").config()
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/home.html'));
});
app.use('/latest-event', latestEventRouter)
app.use('/last-event', lastEventRouter)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rxbdc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database connected")
    })
    .catch((e) => {
        console.log("error", e)
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


const mongoose = require('mongoose');
const lastEventSchema = new mongoose.Schema({
    "date": { type: Date, default: new Date() },
    "sensor1": { type: Number, default: 0 },
    "sensor2": { type: Number, default: 0 },
    "sensor3": { type: Number, default: 0 },
    "sensor4": { type: Number, default: 0 },
}, { timestamps: true });
const LastEvent = mongoose.model('post', lastEventSchema);
module.exports = LastEvent
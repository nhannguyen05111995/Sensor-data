const LastEvent = require('../models/last-event');
const createLastEvent = (req, res) => {
    try {
        LastEvent.findOne({ date: req.body.date }).then(
            function (data) {
                if (!data) {
                    const lastEvent = new LastEvent(req.body);
                    lastEvent.save();
                    res.status(201).json(lastEvent);
                }
                else {
                    res.status(200).json({ success: true, message: "This last event is already in the list" });
                }
            },
            function (error) {
                res.status(400).json({ success: false, error });
            }
        );;

    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}
const getLastEvents = async (req, res) => {
    try {
        const lastEvents = await LastEvent.find();
        res.status(200).json(lastEvents);
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}

const deleteLastEvent = async (req, res) => {
    try {
        const event = await LastEvent.findOneAndDelete({ _id: req.params.id });
        res.status(200).json("Last event was deleted");
    } catch (error) {
        res.status(404).json({ success: false, error });
    }
}

module.exports = { createLastEvent, getLastEvents, deleteLastEvent }
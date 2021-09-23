const express = require('express');
const router = express.Router();
const { getLastEvents, createLastEvent, deleteLastEvent } = require('../controllers/last-event');
router.get('/', getLastEvents);
router.post('/', createLastEvent);
router.delete('/:id', deleteLastEvent);
module.exports = router
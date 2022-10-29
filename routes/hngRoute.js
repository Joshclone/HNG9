const express = require('express');
const router = express.Router();
const controller = require('../controllers/hngController');

router.post('/hng', controller.hngFlight);
router.get('/hng', controller.findAll);
router.get('/hng/:Id', controller.findOne);
router.put('/hngUpdate/:Id', controller.hngUpdate);


module.exports = router;

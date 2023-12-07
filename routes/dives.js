const express = require('express');
const router = express.Router();
const diveController = require('../controllers/dives');
const { ensureAuth } = require('../middleware/auth');

router.post('/createDive', diveController.createDive);

module.exports = router;

const express = require('express');
const router = express.Router();
const diveController = require('../controllers/dives');
const { ensureAuth } = require('../middleware/auth');

router.get('/', diveController.getDives);
router.post('/createDive', diveController.createDive);

module.exports = router;

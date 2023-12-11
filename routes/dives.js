const express = require('express');
const router = express.Router();
const diveController = require('../controllers/dives');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, diveController.getDives);
router.post('/createDive', diveController.createDive);
router.delete('/deleteDive', diveController.deleteDive);

module.exports = router;

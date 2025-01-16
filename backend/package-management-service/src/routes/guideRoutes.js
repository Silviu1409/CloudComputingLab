const express = require('express');
const { createGuide, getAllGuides } = require('../controllers/guideController');

const router = express.Router();

router.post('/', createGuide);
router.get('/', getAllGuides);

module.exports = router;

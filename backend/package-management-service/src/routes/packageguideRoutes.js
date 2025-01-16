const express = require('express');
const { assignGuideToPackage, getPackageGuides } = require('../controllers/packageguideController');

const router = express.Router();

router.post('/', assignGuideToPackage);
router.get('/', getPackageGuides);

module.exports = router;

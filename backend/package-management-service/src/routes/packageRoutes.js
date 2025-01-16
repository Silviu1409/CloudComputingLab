const express = require('express');
const { createPackage, getAllPackages, getExtendedPackageDetails } = require('../controllers/packageController');

const router = express.Router();

router.post('/', createPackage);
router.get('/', getAllPackages);
router.get('/extended-details', getExtendedPackageDetails);

module.exports = router;

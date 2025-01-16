const express = require('express');
const { createPackage, getPackageById, getAllPackages, getExtendedPackageDetails } = require('../controllers/packageController');

const router = express.Router();

router.post('/', createPackage);
router.get('/package/:id', getPackageById);
router.get('/', getAllPackages);
router.get('/extended-details', getExtendedPackageDetails);

module.exports = router;

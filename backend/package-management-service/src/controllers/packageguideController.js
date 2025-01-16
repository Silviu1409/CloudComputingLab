const PackageGuide = require('../models/PackageGuide');
const Package = require('../models/Package');
const Guide = require('../models/Guide');

const assignGuideToPackage = async (req, res) => {
  try {
    const { package_id, guide_id } = req.body;
    
    // Ensure the package and guide exist
    const packageExists = await Package.findByPk(package_id);
    const guideExists = await Guide.findByPk(guide_id);

    if (!packageExists || !guideExists) {
      return res.status(404).json({ error: 'Package or Guide not found' });
    }

    const packageGuideData = await PackageGuide.create({
      package_id,
      guide_id,
    });

    res.status(201).json(packageGuideData);
  } catch (error) {
    res.status(500).json({ error: 'Error assigning guide to package' });
  }
};

const getPackageGuides = async (req, res) => {
  try {
    const packageGuides = await PackageGuide.findAll({
      include: [Package, Guide],
    });
    res.status(200).json(packageGuides);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching package guides' });
  }
};

module.exports = { assignGuideToPackage, getPackageGuides };

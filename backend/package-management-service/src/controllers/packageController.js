const Package = require('../models/Package');

const createPackage = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const packageData = await Package.create({
      name,
      description,
      price,
      duration,
    });
    res.status(201).json(packageData);
  } catch (error) {
    res.status(500).json({ error: 'Error creating package' });
  }
};

const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;

    const package = await Package.findByPk(id);

    if (!package) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.status(200).json(package);
  } catch (err) {
    console.error("Error fetching package by id:", err);
    res.status(500).json({ error: "Error fetching package by id", details: err.message });
  }
};

const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching packages' });
  }
};

const getExtendedPackageDetails = async (req, res) => {
  try {
    const { _page = 1, _limit = 5 } = req.query;

    const limit = parseInt(_limit, 10);
    const offset = (parseInt(_page, 10) - 1) * limit;

    const { count, rows: packages } = await Package.findAndCountAll({
      limit,
      offset,
    });

    const transformedPackages = await Promise.all(packages.map(async (pkg) => {
      const guides = await pkg.getGuides();
      return {
        id: pkg.id,
        title: pkg.name,
        description: pkg.description,
        price: pkg.price,
        availableSeats: pkg.availableSeats,
        imgSrc: pkg.imgSrc,
        guide: guides.length > 0
          ? {
              name: `${guides[0].first_name} ${guides[0].last_name}`,
              language: guides[0].language,
            }
          : null,
      };
    }));

    res.set('X-Total-Count', count);
    res.status(200).json(transformedPackages);
  } catch (error) {
    console.error('Error fetching extended package details:', error);
    res.status(500).json({ error: 'Error fetching extended package details' });
  }
};

module.exports = { createPackage, getPackageById, getAllPackages, getExtendedPackageDetails };

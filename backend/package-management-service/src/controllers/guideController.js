const Guide = require('../models/Guide');

const createGuide = async (req, res) => {
  try {
    const { first_name, last_name, language } = req.body;
    const guideData = await Guide.create({
      first_name,
      last_name,
      language,
    });
    res.status(201).json(guideData);
  } catch (error) {
    res.status(500).json({ error: 'Error creating guide' });
  }
};

const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching guides' });
  }
};

module.exports = { createGuide, getAllGuides };

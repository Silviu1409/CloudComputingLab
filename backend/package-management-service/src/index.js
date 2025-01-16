const express = require("express");
const cors = require('cors');
const packageRoutes = require('./routes/packageRoutes');
const guideRoutes = require('./routes/guideRoutes');
const packageGuideRoutes = require('./routes/packageguideRoutes');
const sequelize = require("./config/database");
const Guide = require('./models/Guide');
const Package = require('./models/Package');
const PackageGuide = require('./models/PackageGuide');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/packages', packageRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/package-guides', packageGuideRoutes);

Guide.associate({ Package, PackageGuide });
Package.associate({ Guide, PackageGuide });
PackageGuide.associate({ Package, Guide });

sequelize
  .sync()
  .then(async () => {
    console.log("Database synced!");

    await insertInitialData();

    app.listen(PORT, () =>
      console.log(`Package Management Service running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("Error syncing database:", err));

async function insertInitialData() {
  const existingPackages = await sequelize.models.Package.findAll();
  if (existingPackages.length === 0) {
    await sequelize.models.Package.bulkCreate([
      { name: 'Circuit Paris', description: 'Explorează minunile Parisului cu pachetul nostru exclusiv.', price: 999, duration: 5, availableSeats: 15, imgSrc: '/paris.png' },
      { name: 'City Break Londra', description: 'Bucură-te de frumusețea Londrei cu reduceri speciale.', price: 599, duration: 4, availableSeats: 10, imgSrc: '/londra.png' },
      { name: 'Paradis de Plajă', description: 'O vacanță relaxantă la plajă cu cazare de lux.', price: 1200, duration: 7, availableSeats: 20, imgSrc: '/paradis-de-plaja.png' },
      { name: 'Aventură Montană', description: 'O excursie palpitantă de drumeții și camping la munte.', price: 800, duration: 5, availableSeats: 15, imgSrc: '/aventura-montana.png' },
      { name: 'Safari în Natură', description: 'Participă la un safari african și explorează fauna diversificată.', price: 2000, duration: 8, availableSeats: 10, imgSrc: '/safari-in-natura.png' },
      { name: 'Escapadă pe Insulă', description: 'Fugi pe o insulă tropicală pentru distracție la soare.', price: 1000, duration: 6, availableSeats: 25, imgSrc: '/escapada-pe-insula.png' },
      { name: 'Croazieră de Lux', description: 'O croazieră de lux de 10 zile pe Marea Mediterană.', price: 3000, duration: 10, availableSeats: 50, imgSrc: '/croaziera-de-lux.png' },
      { name: 'Tur European', description: 'Vizitează orașe faimoase din Europa, inclusiv Paris și Roma.', price: 1800, duration: 12, availableSeats: 40, imgSrc: '/tur-european.png' },
      { name: 'Expediție Arctică', description: 'Descoperă frumusețea arctică și fenomenul uimitor al aurorei boreale.', price: 2500, duration: 9, availableSeats: 12, imgSrc: '/expeditie-arctica.png' },
      { name: 'Excursie în Asia', description: 'O călătorie captivantă prin Thailanda, Japonia și China.', price: 2200, duration: 14, availableSeats: 30, imgSrc: '/excursie-in-asia.png'}
    ]);
    console.log("Packages data inserted!");
  } else {
    console.log("Packages data already exists.");
  }

  const existingGuides = await sequelize.models.Guide.findAll();
  if (existingGuides.length === 0) {
    await sequelize.models.Guide.bulkCreate([
      { first_name: 'John', last_name: 'Doe', language: 'English' },
      { first_name: 'Jane', last_name: 'Smith', language: 'Spanish' },
      { first_name: 'Carlos', last_name: 'Mendez', language: 'Spanish' },
      { first_name: 'Olivia', last_name: 'Johnson', language: 'English' },
      { first_name: 'Emilia', last_name: 'Wong', language: 'Mandarin' },
      { first_name: 'Liam', last_name: 'Nguyen', language: 'Vietnamese' },
      { first_name: 'Sophia', last_name: 'Martinez', language: 'French' },
      { first_name: 'Michael', last_name: 'Brown', language: 'English' },
      { first_name: 'Lucas', last_name: 'Perez', language: 'Portuguese' },
      { first_name: 'Ava', last_name: 'Chen', language: 'Mandarin' }
    ]);
    console.log("Guides data inserted!");
  } else {
    console.log("Guides data already exists.");
  }

  const existingPackageGuides = await sequelize.models.PackageGuide.findAll();
  if (existingPackageGuides.length === 0) {
    await sequelize.models.PackageGuide.bulkCreate([
      { package_id: 1, guide_id: 1 },
      { package_id: 1, guide_id: 4 },
      { package_id: 2, guide_id: 2 },
      { package_id: 2, guide_id: 3 },
      { package_id: 3, guide_id: 6 },
      { package_id: 3, guide_id: 7 },
      { package_id: 4, guide_id: 1 },
      { package_id: 4, guide_id: 8 },
      { package_id: 5, guide_id: 9 },
      { package_id: 6, guide_id: 5 },
      { package_id: 6, guide_id: 10 },
      { package_id: 7, guide_id: 2 },
      { package_id: 7, guide_id: 3 },
      { package_id: 8, guide_id: 6 },
      { package_id: 9, guide_id: 4 },
      { package_id: 9, guide_id: 7 },
      { package_id: 10, guide_id: 5 },
      { package_id: 10, guide_id: 10 }
    ]);
    console.log("Package-Guide data inserted!");
  } else {
    console.log("Package-Guide data already exists.");
  }
}  

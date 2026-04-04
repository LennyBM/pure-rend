const sharp = require('sharp');
const path = require('path');

const imgPath = path.resolve(process.cwd(), 'pure rend cover photo facebook.jpg');

sharp(imgPath)
  .metadata()
  .then(metadata => {
    console.log(JSON.stringify(metadata, null, 2));
  })
  .catch(err => {
    console.error('Error reading image:', err);
  });

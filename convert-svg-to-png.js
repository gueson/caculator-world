const fs = require('fs');
const sharp = require('sharp');

// SVG content
const svgContent = fs.readFileSync('public/icon.svg', 'utf8');

// Convert to 192x192 PNG
sharp(Buffer.from(svgContent))
  .resize(192, 192)
  .png()
  .toFile('public/icon-192.png')
  .then(() => {
    console.log('icon-192.png created successfully');
  })
  .catch((err) => {
    console.error('Error creating icon-192.png:', err);
  });

// Convert to 512x512 PNG
sharp(Buffer.from(svgContent))
  .resize(512, 512)
  .png()
  .toFile('public/icon-512.png')
  .then(() => {
    console.log('icon-512.png created successfully');
  })
  .catch((err) => {
    console.error('Error creating icon-512.png:', err);
  });

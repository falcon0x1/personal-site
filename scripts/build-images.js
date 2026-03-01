const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const imgDir = path.join(projectRoot, 'img');

const images = [
  { name: 'logo-black.png', quality: 80, width: 60 },
  { name: 'logo-red.png', quality: 80, width: 60 },
  { name: 'logo-blue.png', quality: 80, width: 60 },
  { name: 'logo-white.png', quality: 80, width: 60 },
  { name: 'ewpt.webp', quality: 80, width: 80 },
  { name: 'apisec.png', quality: 80, width: 90 },
  { name: 'ine.jpg', quality: 80, width: 60 },
  { name: 'iti.jpg', quality: 80, width: 60 },
  { name: 'cybertalents.jpg', quality: 80, width: 70 },
];

async function convertImages() {
  console.log('🖼️  Converting images to WebP...');
  
  for (const img of images) {
    const inputPath = path.join(imgDir, img.name);
    const outputPath = path.join(imgDir, img.name.replace(/\.[^.]+$/, '.webp'));
    
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .resize(img.width, null, { fit: 'inside' })
          .webp({ quality: img.quality })
          .toFile(outputPath);
        
        const inputSize = fs.statSync(inputPath).size;
        const outputSize = fs.statSync(outputPath).size;
        const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
        
        console.log(`  ✅ ${img.name} → ${img.name.replace(/\.[^.]+$/, '.webp')} (${savings}% smaller)`);
      } catch (err) {
        console.log(`  ❌ Failed to convert ${img.name}: ${err.message}`);
      }
    } else {
      console.log(`  ⚠️  ${img.name} not found, skipping`);
    }
  }
  
  console.log('✅ Image conversion complete!\n');
}

convertImages();

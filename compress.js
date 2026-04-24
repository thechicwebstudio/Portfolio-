const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'sequence');

async function processImages() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  console.log(`Found ${files.length} images to compress. Starting...`);
  
  let count = 0;
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
    
    await sharp(inputPath)
      .webp({ quality: 60 }) 
      .toFile(outputPath);
      
    fs.unlinkSync(inputPath); 
    count++;
    if (count % 20 === 0) console.log(`Processed ${count}/${files.length} files...`);
  }
  console.log('All files compressed successfully!');
}

processImages().catch(console.error);

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'projects');

async function processDirectory(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      try {
        await sharp(fullPath)
          .webp({ quality: 60 })
          .toFile(outputPath);
          
        fs.unlinkSync(fullPath);
        // Only log every 10th file to not spam stdout
        if (Math.random() < 0.1) console.log(`Compressed: ${outputPath}`);
      } catch (err) {
        console.error(`Failed to compress ${fullPath}:`, err);
      }
    }
  }
}

console.log("Starting deep compression of public/projects...");
processDirectory(dir)
  .then(() => console.log('All project images deeply compressed successfully!'))
  .catch(console.error);

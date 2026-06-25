import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const MAX_SIZE_BYTES = 300 * 1024; // 300KB
const MAX_DIMENSION = 2000;

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      try {
        const stats = await fs.stat(fullPath);
        if (stats.size > MAX_SIZE_BYTES) {
          console.log(`Processing large image: ${fullPath} (${(stats.size / 1024).toFixed(2)} KB)`);
          
          const image = sharp(fullPath);
          const metadata = await image.metadata();
          
          let pipeline = image;
          
          if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
             const scale = Math.min(MAX_DIMENSION / metadata.width, MAX_DIMENSION / metadata.height);
             pipeline = pipeline.resize(Math.round(metadata.width * scale), Math.round(metadata.height * scale));
          }
          
          const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          
          await pipeline
            .webp({ quality: 80, effort: 6 })
            .toFile(webpPath);
            
          console.log(`Created: ${webpPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

async function run() {
  await processDirectory(path.join(process.cwd(), 'public'));
  await processDirectory(path.join(process.cwd(), 'src/assets'));
  console.log("Done processing images.");
}

run();

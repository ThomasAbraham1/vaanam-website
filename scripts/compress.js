import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDirs = [
  'C:/Users/cta10/Downloads/Vanam X Profound Media/002. Gallery Page',
  'C:/Users/cta10/Downloads/Vanam X Profound Media/002. Gallery Page/New Section'
];
const outDir = path.join(process.cwd(), 'src/assets/gallery');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processImages() {
  for (const dir of sourceDirs) {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory not found: ${dir}`);
      continue;
    }
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.match(/\.(png|jpe?g)$/i)) continue;
      
      const inPath = path.join(dir, file);
      const outPath = path.join(outDir, file.replace(/\.[^/.]+$/, '.webp'));
      
      console.log(`Processing: ${file}...`);
      try {
        await sharp(inPath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 65 })
          .toFile(outPath);
        console.log(`Saved: ${outPath}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  console.log('Done compressing images!');
}

processImages();

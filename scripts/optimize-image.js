import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimize() {
  const dirs = ['public', 'src/assets'];
  let foundFile = null;

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (/^rosana\.(png|jpg|jpeg|webp)$/i.test(file)) {
        foundFile = path.join(dir, file);
        break;
      }
    }
    if (foundFile) break;
  }

  if (!foundFile) {
    console.log('No rosana image found. Keeping default rosanaData.ts.');
    return;
  }

  console.log(`Found image: ${foundFile}`);

  try {
    // Rotate automatically based on EXIF (phone camera photos), resize to max 1000px, compress jpeg quality 85
    const processedBuffer = await sharp(foundFile)
      .rotate()
      .resize(1000, 1000, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer();

    const b64 = 'data:image/jpeg;base64,' + processedBuffer.toString('base64');
    const content = `export const rosanaImage = ${JSON.stringify(b64)};\n`;
    
    fs.writeFileSync('src/assets/rosanaData.ts', content);
    console.log(`Successfully generated src/assets/rosanaData.ts (Base64 size: ${(b64.length / 1024).toFixed(1)} KB)`);

    // Also copy optimized JPEG to public/rosana.jpg and src/assets/rosana.jpg for direct static serving
    fs.writeFileSync('public/rosana.jpg', processedBuffer);
    fs.writeFileSync('src/assets/rosana.jpg', processedBuffer);
    console.log('Updated public/rosana.jpg and src/assets/rosana.jpg with optimized image.');
  } catch (err) {
    console.error('Error processing image with sharp:', err);
  }
}

optimize();

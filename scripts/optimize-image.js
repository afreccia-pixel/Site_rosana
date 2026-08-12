import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const candidates = [
  'public/rosana.png',
  'public/rosana.jpg',
  'public/rosana.jpeg',
  'src/assets/rosana.png',
  'src/assets/rosana.jpg',
  'src/assets/rosana.jpeg'
];

let targetImg = candidates.find(p => fs.existsSync(p));

if (targetImg) {
  console.log(`Found image at ${targetImg}, processing...`);
  const optPath = 'src/assets/rosana_opt.jpg';
  
  try {
    execSync(`convert "${targetImg}" -resize 800x800 -quality 85 "${optPath}"`, { stdio: 'ignore' });
    targetImg = optPath;
  } catch (e) {
    console.log('ImageMagick convert not available, using raw file.');
  }

  const buf = fs.readFileSync(targetImg);
  const ext = path.extname(targetImg).toLowerCase();
  const mime = (ext === '.png') ? 'image/png' : 'image/jpeg';
  const b64 = `data:${mime};base64,` + buf.toString('base64');
  
  const content = `export const rosanaImage = ${JSON.stringify(b64)};\n`;
  fs.writeFileSync('src/assets/rosanaData.ts', content);
  console.log(`Updated src/assets/rosanaData.ts successfully (${b64.length} chars).`);
} else {
  console.log('No rosana image found in candidates. Skipping.');
}

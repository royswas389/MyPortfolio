import fs from 'fs';
import path from 'path';

const src = 'C:/Users/roysw/.gemini/antigravity-ide/brain/f10ae199-f1c8-4064-ab1e-f82ac684f58e/.user_uploaded/media_1786979087474.jpg';
const destDir = './src/assets';
const dest = path.join(destDir, 'profile.jpg');

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log('✅ profile.jpg copied to src/assets/');

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATASET_URL = 'https://api.apify.com/v2/datasets/CcVHzungROt8HKQNe/items';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'real_portfolio');

const TARGET_POSTS = {
  'ClHFglYoXtx': 'garage-float-apartment-skim',
  'Cme0seloBv_': 'christmas-2022-review',
  'CzifdM1IXLw': 'recent-works-nov-2023',
  'CU8ItsasQhf': 'double-story-extension',
  'CCwTmUMAU5z': 'sand-cement-new-build',
  'DC1ePSloO1i': 'monster-new-build-ecorend',
  'C-3EqnWIY3O': 'internal-works-aug-2024',
  'CwyGX9TIh8d': 'summer-sprays-ecorend',
  'CiUVBTYoyy9': 'multi-million-pound-new-build'
};

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (res.headers.location) {
        // Handle redirect
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function fetchRealMedia() {
  console.log('Fetching Instagram dataset...');
  try {
    const response = await fetch(DATASET_URL);
    const items = await response.json();
    
    console.log(`Found ${items.length} items in dataset.`);
    let downloadedCount = 0;
    
    for (const item of items) {
      const url = item.url || '';
      for (const [code, filePrefix] of Object.entries(TARGET_POSTS)) {
        if (url.includes(code)) {
          console.log(`Found target post: ${filePrefix}`);
          
          // Download primary display URL
          if (item.displayUrl) {
            const dest = path.join(OUTPUT_DIR, `${filePrefix}-main.jpg`);
            await downloadImage(item.displayUrl, dest);
            console.log(`Downloaded main image for ${filePrefix}`);
            downloadedCount++;
          }
          
          // Download carousel children if available
          if (item.childPosts && item.childPosts.length > 0) {
            let index = 1;
            for (const child of item.childPosts) {
              if (child.displayUrl) {
                const dest = path.join(OUTPUT_DIR, `${filePrefix}-child-${index}.jpg`);
                await downloadImage(child.displayUrl, dest);
                console.log(`Downloaded child image ${index} for ${filePrefix}`);
                downloadedCount++;
                index++;
              }
            }
          }
        }
      }
    }
    
    console.log(`Finished! Downloaded ${downloadedCount} real images to /public/images/real_portfolio`);
  } catch (err) {
    console.error('Error fetching media:', err);
  }
}

fetchRealMedia();

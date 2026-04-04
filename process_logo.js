const sharp = require('sharp');
const path = require('path');

async function processImage() {
  const input = path.resolve(process.cwd(), 'pure rend cover photo facebook.jpg');
  const output = path.resolve(process.cwd(), 'public', 'images', 'pure-rend-logo.webp');

  try {
    const metadata = await sharp(input).metadata();
    console.log(`Original size: ${metadata.width}x${metadata.height}`);

    // Upscale by a factor of 2 (or to a fixed width if it's very small)
    const targetWidth = Math.max(metadata.width * 2, 800);

    await sharp(input)
      .resize({ 
        width: targetWidth,
        withoutEnlargement: false, // Explicitly allow enlargement (upscaling)
        kernel: sharp.kernel.lanczos3, // Best quality for upscaling
      })
      .webp({ quality: 85, effort: 6 }) // High compression effort for good size/quality ratio
      .toFile(output);
      
    console.log(`Successfully upscaled and compressed to ${targetWidth}px wide webp.`);
  } catch(e) {
    console.error('Error processing image:', e);
  }
}

processImage();

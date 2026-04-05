import sharp from "sharp";
import { readdir, stat, rename, writeFile, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGE_DIR = "public/images";  // adjust per project
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;

let totalOriginal = 0;
let totalOptimised = 0;
let filesProcessed = 0;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await getFiles(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

async function optimiseImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return;

  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;
  totalOriginal += originalSize;

  try {
    const metadata = await sharp(filePath).metadata();
    const needsResize = metadata.width && metadata.width > MAX_WIDTH;

    if (ext === ".png") {
      // Convert PNG → WebP (typically 80-95% smaller)
      const webpPath = filePath.replace(/\.png$/i, ".webp");
      const pipeline = sharp(filePath);
      if (needsResize) pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(webpPath);

      const newStat = await stat(webpPath);
      totalOptimised += newStat.size;
      filesProcessed++;

      const savings = ((1 - newStat.size / originalSize) * 100).toFixed(0);
      console.log(`  ✓ ${basename(filePath)} → .webp (${fmt(originalSize)} → ${fmt(newStat.size)}, -${savings}%)`);

      // Also compress the original PNG in place
      const pngBuffer = await sharp(filePath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toBuffer();
      if (pngBuffer.length < originalSize) {
        const tmpPath = filePath + ".tmp";
        await writeFile(tmpPath, pngBuffer);
        await unlink(filePath);
        await rename(tmpPath, filePath);
      }
    } else if (ext === ".webp") {
      // Re-compress WEBP
      const buffer = await sharp(filePath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toBuffer();

      if (buffer.length < originalSize) {
        const tmpPath = filePath + ".tmp";
        await writeFile(tmpPath, buffer);
        await unlink(filePath);
        await rename(tmpPath, filePath);
        totalOptimised += buffer.length;
        filesProcessed++;
        const savings = ((1 - buffer.length / originalSize) * 100).toFixed(0);
        console.log(`  ✓ ${basename(filePath)} (${fmt(originalSize)} → ${fmt(buffer.length)}, -${savings}%)`);
      } else {
        totalOptimised += originalSize;
        console.log(`  · ${basename(filePath)} (${fmt(originalSize)}, already optimal)`);
      }
    } else {
      // Re-compress JPEG with mozjpeg
      const buffer = await sharp(filePath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer();

      if (buffer.length < originalSize) {
        const tmpPath = filePath + ".tmp";
        await writeFile(tmpPath, buffer);
        await unlink(filePath);
        await rename(tmpPath, filePath);
        totalOptimised += buffer.length;
        filesProcessed++;
        const savings = ((1 - buffer.length / originalSize) * 100).toFixed(0);
        console.log(`  ✓ ${basename(filePath)} (${fmt(originalSize)} → ${fmt(buffer.length)}, -${savings}%)`);
      } else {
        totalOptimised += originalSize;
        console.log(`  · ${basename(filePath)} (${fmt(originalSize)}, already optimal)`);
      }
    }
  } catch (err) {
    console.error(`  ✗ ${basename(filePath)}: ${err.message}`);
    totalOptimised += originalSize;
  }
}

function fmt(bytes) {
  return bytes > 1024 * 1024 ? (bytes / 1024 / 1024).toFixed(1) + "MB" : Math.round(bytes / 1024) + "KB";
}

async function main() {
  console.log("\n🖼️  Optimising images...\n");
  const files = await getFiles(IMAGE_DIR);
  const imageFiles = files.filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));
  console.log(`  Found ${imageFiles.length} images\n`);
  for (const file of imageFiles) await optimiseImage(file);
  const savings = ((1 - totalOptimised / totalOriginal) * 100).toFixed(0);
  console.log(`\n📊 Original: ${fmt(totalOriginal)} → Optimised: ${fmt(totalOptimised)} (-${savings}%, ${filesProcessed} files)\n`);
}

main().catch(console.error);

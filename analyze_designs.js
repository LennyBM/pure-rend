const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const baseDir = path.join(__dirname, 'stitch_designs', 'stitch');

function findDuplicates() {
  const codeFiles = [];
  
  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'code.html') {
        codeFiles.push(filePath);
      }
    }
  }

  walk(baseDir);

  const hashes = {};
  const duplicates = [];
  const uniqueFiles = [];

  for (const file of codeFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const hash = crypto.createHash('sha256').update(content).digest('hex');
    
    if (hashes[hash]) {
      duplicates.push({ file, duplicateOf: hashes[hash] });
    } else {
      hashes[hash] = file;
      uniqueFiles.push(file);
    }
  }

  return { uniqueFiles, duplicates };
}

const result = findDuplicates();
console.log(JSON.stringify(result, null, 2));
fs.writeFileSync('analysis.json', JSON.stringify(result, null, 2));

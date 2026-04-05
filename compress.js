const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') && !file.includes('page.tsx')) results.push(file);
      if (file.endsWith('.tsx') && file.includes('page.tsx') && !file.includes('src/app/page.tsx') && !file.includes('src\\\\app\\\\page.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Simple string replacements to catch className uses safely
  if (content.includes('py-12')) {
    content = content.replace(/className="([^"]*?)py-12([^"]*?)"/g, 'className="$1py-6 md:py-12$2"');
    changed = true;
  }
  if (content.includes('p-8')) {
    content = content.replace(/className="([^"]*?)p-8([^"]*?)"/g, 'className="$1p-4 md:p-8$2"');
    changed = true;
  }
  if (content.includes('gap-16')) {
    content = content.replace(/className="([^"]*?)gap-16([^"]*?)"/g, 'className="$1gap-8 md:gap-16$2"');
    changed = true;
  }
  if (content.includes('gap-20')) {
    content = content.replace(/className="([^"]*?)gap-20([^"]*?)"/g, 'className="$1gap-10 md:gap-20$2"');
    changed = true;
  }
  if (content.includes('gap-12')) {
    content = content.replace(/className="([^"]*?)gap-12([^"]*?)"/g, 'className="$1gap-6 md:gap-12$2"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});

console.log('Site-wide padding squashed!');

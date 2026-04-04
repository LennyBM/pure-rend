const fs = require('fs');
const path = require('path');
const paths = require('./analysis.json').uniqueFiles;

let output = '# Design Analysis\n\n';

const colorRegex = /\b(text|bg|border)-([a-z]+-\d+|white|black|transparent)\b/g;
const fontRegex = /\b(font-[a-z]+|text-[a-z][a-z])\b/g;

paths.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const folderName = path.basename(path.dirname(p));
  
  output += `## Page: ${folderName}\n\n`;
  
  // Extract Headings
  const headings = [];
  const hRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gis;
  let match;
  while ((match = hRegex.exec(content)) !== null) {
    headings.push(`${match[1].toUpperCase()}: ${match[2].replace(/<[^>]+>/g, '').trim()}`);
  }
  
  output += `### Wireframe / Headings\n`;
  headings.forEach(h => output += `- ${h}\n`);
  if (headings.length === 0) output += `- No headings found\n`;
  output += '\n';

  // Extract Buttons/Links as key features
  const features = [];
  const btnRegex = /<a[^>]*class="[^"]*?(?:bg-|text-)[^"]*"[^>]*>(.*?)<\/a>|<button[^>]*>(.*?)<\/button>/gis;
  while ((match = btnRegex.exec(content)) !== null) {
    const text = (match[1] || match[2]).replace(/<[^>]+>/g, '').trim();
    if (text) features.push(text);
  }

  output += `### Key Features (Buttons/CTAs)\n`;
  [...new Set(features)].forEach(f => output += `- ${f}\n`);
  if (features.length === 0) output += `- No buttons/CTAs found\n`;
  output += '\n';
  
  // Colors
  const colors = [];
  let colorMatch;
  while ((colorMatch = colorRegex.exec(content)) !== null) {
    colors.push(colorMatch[0]);
  }
  output += `### Colors Used\n`;
  [...new Set(colors)].forEach(c => output += `- \`${c}\`\n`);
  output += '\n';
  
  // Fonts / Typographic sizes
  const fonts = [];
  let fontMatch;
  while ((fontMatch = fontRegex.exec(content)) !== null) {
    fonts.push(fontMatch[0]);
  }
  output += `### Typography Guidelines\n`;
  [...new Set(fonts)].forEach(f => output += `- \`${f}\`\n`);
  output += '\n';
});

// Calculate similarity to spot true duplicates
output += `## Similarity Notes\n`;
output += `Visually inspect the headings to select the final distinct pages. E.g., 'purerend_homepage' vs 'purerend_homepage_updated'.\n`;

fs.mkdirSync(path.join(__dirname, 'artifacts'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'artifacts', 'design_analysis.md'), output);

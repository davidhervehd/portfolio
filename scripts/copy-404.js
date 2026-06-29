const fs = require('fs');
const path = require('path');

const buildIndex = path.join(__dirname, '..', 'build', 'index.html');
const build404 = path.join(__dirname, '..', 'build', '404.html');

if (!fs.existsSync(buildIndex)) {
  console.error('copy-404: build/index.html not found. Run npm run build first.');
  process.exit(1);
}

fs.copyFileSync(buildIndex, build404);
console.log('copy-404: Copied build/index.html to build/404.html for GitHub Pages SPA routing.');

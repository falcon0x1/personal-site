const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const cssFiles = [
  path.join(projectRoot, 'css/style.css'),
  path.join(projectRoot, 'css/minimal.css'),
];

async function buildCSS() {
  console.log('🎨 Building CSS...');
  
  try {
    let combinedCSS = '';
    
    for (const file of cssFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        combinedCSS += `/* === ${path.basename(file)} === */\n${content}\n\n`;
      }
    }
    
    // Also add Tailwind output.css (minified)
    const tailwindPath = path.join(projectRoot, 'dist/output.css');
    if (fs.existsSync(tailwindPath)) {
      const tailwind = fs.readFileSync(tailwindPath, 'utf8');
      combinedCSS += `/* === output.css === */\n${tailwind}\n\n`;
    }
    
    // Minify and write to dist
    const outputPath = path.join(distDir, 'main.min.css');
    const minified = await postcss([cssnano({ preset: 'default' })]).process(combinedCSS, { from: undefined });
    combinedCSS = minified.css;
    fs.writeFileSync(outputPath, combinedCSS);
    
    const size = Buffer.byteLength(combinedCSS, 'utf8');
    console.log(`  ✅ CSS: ${(size / 1024).toFixed(1)}KB`);
    console.log('✅ CSS build complete!\n');
    
  } catch (err) {
    console.error('❌ CSS build failed:', err.message);
    process.exit(1);
  }
}

buildCSS();

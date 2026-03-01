const fs = require('fs');
const path = require('path');
const { minify: minifyHTML } = require('html-minifier-terser');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

async function buildHTML() {
  console.log('📄 Building HTML...');
  
  try {
    const inputPath = path.join(projectRoot, 'index.html');
    const outputPath = path.join(distDir, 'index.html');
    
    let html = fs.readFileSync(inputPath, 'utf8');
    
    // The HTML should already have:
    // - Inline SVGs instead of Font Awesome
    // - Updated references to dist/ files
    // - Canarytoken preserved in head
    
    // Minify HTML
    const result = await minifyHTML(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    });
    
    fs.writeFileSync(outputPath, result);
    
    const originalSize = Buffer.byteLength(html, 'utf8');
    const minifiedSize = Buffer.byteLength(result, 'utf8');
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
    
    console.log(`  ✅ HTML: ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    console.log('✅ HTML build complete!\n');
    
  } catch (err) {
    console.error('❌ HTML build failed:', err.message);
    process.exit(1);
  }
}

buildHTML();

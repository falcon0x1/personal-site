const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const jsFiles = [
  { file: path.join(projectRoot, 'js/main.js'), defer: true },
  { file: path.join(projectRoot, 'js/terminal.js'), defer: true },
];

async function buildJS() {
  console.log('📦 Building JavaScript...');

  try {
    let combinedJS = '';

    // Read and combine JS files
    for (const { file } of jsFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        combinedJS += `/* === ${path.basename(file)} === */\n${content}\n\n`;
      }
    }

    // Minify with terser
    const result = await minify(combinedJS, {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      mangle: true,
      format: {
        comments: false,
      },
    });

    if (result.error) {
      throw result.error;
    }

    // Write to dist
    const outputPath = path.join(distDir, 'main.min.js');
    fs.writeFileSync(outputPath, result.code);

    // Copy canary.min.js to dist
    const canarySrc = path.join(projectRoot, 'js/canary.min.js');
    const canaryDest = path.join(distDir, 'canary.min.js');
    if (fs.existsSync(canarySrc)) {
      fs.copyFileSync(canarySrc, canaryDest);
      console.log('  ✅ Copied canary.min.js to dist/');
    }

    // Copy img folder to dist/img
    const imgSrcDir = path.join(projectRoot, 'img');
    const imgDestDir = path.join(distDir, 'img');
    if (fs.existsSync(imgSrcDir)) {
      if (!fs.existsSync(imgDestDir)) {
        fs.mkdirSync(imgDestDir, { recursive: true });
      }
      const imgFiles = fs.readdirSync(imgSrcDir);
      for (const file of imgFiles) {
        const srcFile = path.join(imgSrcDir, file);
        const destFile = path.join(imgDestDir, file);
        if (fs.statSync(srcFile).isFile()) {
          fs.copyFileSync(srcFile, destFile);
        }
      }
      console.log('  ✅ Copied img/ folder to dist/img/');
    }

    const originalSize = Buffer.byteLength(combinedJS, 'utf8');
    const minifiedSize = Buffer.byteLength(result.code, 'utf8');
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    console.log(`  ✅ JS: ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    console.log('✅ JS build complete!\n');

  } catch (err) {
    console.error('❌ JS build failed:', err.message);
    process.exit(1);
  }
}

buildJS();

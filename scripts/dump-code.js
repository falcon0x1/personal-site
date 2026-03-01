const fs = require('fs');
const path = require('path');

const output = 'site_code.txt';
const dirsToScan = ['.', 'css', 'js'];
const extensions = ['.html', '.css', '.js'];

let result = '=======================================\nPORTFOLIO CODEBASE DUMP\n=======================================\n\n';

for (const dir of dirsToScan) {
    if (!fs.existsSync(dir)) continue;

    // Simple reading of immediate directory, skip deep recursion for now unless needed
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);

        // Skip current output file or non-files
        if (fullPath === output || !fs.statSync(fullPath).isFile()) continue;

        if (extensions.includes(path.extname(fullPath))) {
            result += `\n--- START FILE: ${fullPath} ---\n\n`;
            result += fs.readFileSync(fullPath, 'utf8');
            result += `\n\n--- END FILE: ${fullPath} ---\n\n`;
        }
    }
}

fs.writeFileSync(output, result);
console.log(`Successfully wrote codebase to ${output}`);

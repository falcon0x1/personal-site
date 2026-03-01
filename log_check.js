const { chromium } = require('playwright'); // if available

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    page.on('console', msg => {
        console.log(`[BROWSER LOG] ${msg.type().toUpperCase()}: ${msg.text()}`);
    });

    page.on('pageerror', error => {
        console.log(`[PAGE ERROR] ${error.message}`);
    });

    page.on('requestfailed', request => {
        console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure().errorText}`);
    });

    try {
        await page.goto('http://localhost:45219', { waitUntil: 'networkidle' });
        await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
        console.log('[GOTO ERROR]', err);
    }

    await browser.close();
})();

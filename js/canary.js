// Clone detection (Canarytoken).
// If this page is served from a host that isn't mine, ping a canary token
// so I get an alert that the site was copied. Nothing is sent from the real site.
(function () {
    var host = window.location.hostname;
    var allowed =
        host === 'elshorbagy.pages.dev' ||
        host.endsWith('.elshorbagy.pages.dev') ||
        host === 'localhost' ||
        host === '127.0.0.1';
    if (allowed) return;

    var token = 'https://canarytokens.com/images/18fvryyqobo2l3z6f60xcdvp9/index.html';
    new Image().src = token +
        '?l=' + encodeURIComponent(window.location.href) +
        '&r=' + encodeURIComponent(document.referrer);
})();

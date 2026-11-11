(function () {
    var path = window.location.pathname.replace(/^\/+/, '') || 'this-page';
    document.getElementById('nf-path').textContent = path;
})();

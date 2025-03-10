document.addEventListener("DOMContentLoaded", function () {
    // Load both fonts before making text visible
    Promise.all([
        document.fonts.load('1em "Poppins"'),
        document.fonts.load('1em "Lavishly Yours"')
    ]).then(function () {
        document.body.classList.add("font-loaded");
    });
});

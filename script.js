document.addEventListener("DOMContentLoaded", function () {
    document.fonts.load('1em "Lavishly Yours"').then(function () {
        document.body.classList.add("font-loaded");
    });
});

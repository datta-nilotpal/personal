document.addEventListener("DOMContentLoaded", function () {
    // Load both fonts before making text visible
    Promise.all([
        document.fonts.load('1em "Poppins"'),
        document.fonts.load('1em "Lavishly Yours"')
    ]).then(function () {
        document.body.classList.add("font-loaded");
    });

    // Scroll behavior for header transparency
    const header = document.querySelector("header");

    function updateHeader() {
        if (window.scrollY === 0) {
            header.classList.add("transparent-header");
        } else {
            header.classList.remove("transparent-header");
        }
    }

    // Initial check when page loads
    updateHeader();

    // Listen for scroll events
    window.addEventListener("scroll", updateHeader);
});

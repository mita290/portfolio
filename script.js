//to make navigation bar disappear
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("navbar").classList.add("hidden");
    } else {
        // Scroll up
        document.getElementById("navbar").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

document.getElementById("about-me").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action

    // Calculate the scale factor
    const scaleFactor = 0.8; // Adjust as needed

    // Calculate the new width and height
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const newWidth = Math.round(currentWidth * scaleFactor);
    const newHeight = Math.round(currentHeight * scaleFactor);

    // Calculate the position for the new window
    const left = window.screenX + (currentWidth - newWidth) / 2;
    const top = window.screenY + (currentHeight - newHeight) / 2;

    // Open the new window with the calculated size and position
    window.open("about.html", "_blank", "width=" + newWidth + ",height=" + newHeight + ",left=" + left + ",top=" + top);
});






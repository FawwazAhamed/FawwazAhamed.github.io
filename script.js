// Get the welcome card element
var welcomeCard = document.getElementById("welcome-card");

// Set a timeout function to slide out the welcome card after 2 seconds
setTimeout(function() {
    // Add a class name to the welcome card element
    welcomeCard.classList.add("slide-out");
}, 1000);

// Get the navbar element
var navbar = document.getElementById("navbar");

// Get all the links in the navbar
var navLinks = navbar.getElementsByTagName("a");

// Loop through each link and add a click event listener
for (var i = 0; i < navLinks.length; i++) {
    // Get the current link
    var link = navLinks[i];

    // Add a click event listener to the link
    link.addEventListener("click", function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Get the href attribute of the link
        var href = this.getAttribute("href");

        // Get the element with the id that matches the href
        var target = document.querySelector(href);

        // Scroll to the target element smoothly
        target.scrollIntoView({behavior: "smooth"});
    });
}
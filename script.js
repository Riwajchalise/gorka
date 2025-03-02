document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar"); // Get navbar
    const navbarHeight = navbar ? navbar.offsetHeight : 60; // Default height if navbar is missing

    // Function to trigger animation again
    function triggerAnimation(targetElement) {
        targetElement.classList.remove("show"); // Remove class
        setTimeout(() => {
            targetElement.classList.add("show"); // Re-add class after delay
        }, 100); // Short delay for smoother effect
    }

    // Smooth scrolling and triggering animation
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Adjusted scroll position to prevent navbar overlap
            const offsetTop = targetElement.offsetTop - navbarHeight - 10; // Adjust spacing

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });

            // Retrigger animation when clicked again
            triggerAnimation(targetElement);

            // Highlight active nav link
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 60;

    // Function to trigger animation again
    function triggerAnimation(targetElement) {
        targetElement.classList.remove("show");
        setTimeout(() => {
            targetElement.classList.add("show");
        }, 100);
    }

    // Smooth scrolling and triggering animation
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Scroll to top if Home link is clicked
            if (targetId === "/") {
                e.preventDefault(); // Prevent default scroll behavior
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                // Remove # from URL after scrolling
                history.replaceState(null, null, " ");

                // Update active class
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
                return;
            }

            e.preventDefault(); // Prevent default only for internal section links
            const targetElement = document.getElementById(targetId.substring(1));

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - navbarHeight - 10;

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });

                // Remove # from URL after scrolling
                history.replaceState(null, null, " ");

                // Retrigger animation
                triggerAnimation(targetElement);

                // Update active class
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // Intersection Observer for updating active link on scroll
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        link.classList.toggle("active", link.getAttribute("href").substring(1) === id);
                    });
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll event to highlight "Home" when at the top
    window.addEventListener("scroll", function () {
        if (window.scrollY < 50) {
            navLinks.forEach(nav => nav.classList.remove("active"));
            document.querySelector(".nav-link[href='/']").classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 60;

    function updateActiveClass(targetId) {
        navLinks.forEach(nav => nav.classList.remove("active"));
        let normalizedTarget = targetId.replace(/^\/#/, "#");

        const activeLink = [...navLinks].find(link => {
            let linkHref = link.getAttribute("href");
            return linkHref.replace(/^\/#/, "#") === normalizedTarget;
        });

        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    function scrollToSection(targetId, smooth = true) {
        const targetElement = document.getElementById(targetId.replace(/^\/#/, ""));
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - navbarHeight - 10;

            window.scrollTo({
                top: offsetTop,
                behavior: smooth ? "smooth" : "instant"
            });

            updateActiveClass(targetId);
        }
    }

    // Handle clicks on navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            e.preventDefault();

            if (targetId === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.replaceState(null, null, " ");
                updateActiveClass(targetId);
                return;
            }

            if (targetId.startsWith("/#") || targetId.startsWith("#")) {
                if (window.location.pathname !== "/") {
                    sessionStorage.setItem("scrollTo", targetId);
                    sessionStorage.setItem("smoothScroll", "true"); // Disable smooth scroll on load
                    
                    // Check the document's language and redirect to the appropriate homepage
                    const lang = document.documentElement.lang === "es" ? "/es/" : "/"; 
                    window.location.href = lang;
                } else {
                    scrollToSection(targetId);
                }
            }            
        });
    });

    // Scroll to section on page load without first jumping to the top
    const storedTarget = sessionStorage.getItem("scrollTo");
    const smoothScroll = sessionStorage.getItem("smoothScroll") === "false";

    if (storedTarget) {
        sessionStorage.removeItem("scrollTo");
        sessionStorage.removeItem("smoothScroll");

        setTimeout(() => {
            scrollToSection(storedTarget, smoothScroll);
        }, 0); // Execute immediately after page loads
    }

    // Intersection Observer for updating active link
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    updateActiveClass(`/#${id}`);
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll event to highlight "Home"
    window.addEventListener("scroll", function () {
        if (window.scrollY < 50) {
            updateActiveClass("/");
        }
    });
});

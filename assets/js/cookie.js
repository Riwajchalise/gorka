document.addEventListener("DOMContentLoaded", () => {
    const consentBox = document.getElementById("consentBox");
    const acceptBtn = document.querySelector(".consentButton");
    const rejectBtn = document.querySelector(".rejectButton");

    if (!consentBox || !acceptBtn || !rejectBtn) {
        console.error("Consent elements not found!");
        return;
    }

    acceptBtn.onclick = () => {
        document.cookie = "CookieBy=Bishal; max-age=" + 60 * 60 * 24;
        if (document.cookie) {
            consentBox.classList.add("hide");
        } else {
            alert("Cookie can't be set! Please unblock this site from the cookie settings of your browser.");
        }
    };

    rejectBtn.onclick = () => {
        consentBox.classList.add("hide");
    };

    let checkCookie = document.cookie.indexOf("CookieBy=Bishal");
    checkCookie !== -1 ? consentBox.classList.add("hide") : consentBox.classList.remove("hide");
});

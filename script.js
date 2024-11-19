document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // FAQ Toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function () {
            item.classList.toggle("active");

            // Toggle "+" and "-" for the FAQ toggle icon
            const toggleIcon = question.querySelector(".faq-toggle");
            if (item.classList.contains("active")) {
                toggleIcon.textContent = "-";
            } else {
                toggleIcon.textContent = "+";
            }

            // Optionally, close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    const otherIcon = otherItem.querySelector(".faq-toggle");
                    if (otherIcon) {
                        otherIcon.textContent = "+";
                    }
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });
    }

    // FAQ Toggle
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const toggleIcon = question?.querySelector(".faq-toggle");

        if (question) {
            question.addEventListener("click", () => {
                item.classList.toggle("active");
                if (toggleIcon) {
                    toggleIcon.textContent = item.classList.contains("active") ? "-" : "+";
                }

                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains("active")) {
                        otherItem.classList.remove("active");
                        const otherIcon = otherItem.querySelector(".faq-toggle");
                        if (otherIcon) {
                            otherIcon.textContent = "+";
                        }
                    }
                });
            });
        }
    });

    // Reviews Slider
    const track = document.querySelector(".reviews-track");
    const reviews = document.querySelectorAll(".review-box");
    const reviewsToShow = 3;
    let currentIndex = 0;

    if (track && reviews.length > reviewsToShow) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % (reviews.length - reviewsToShow + 1);
            track.style.transform = `translateX(${currentIndex * -300}px)`; // Adjust width based on .review-box
        }, 3000);
    }
});

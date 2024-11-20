document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle?.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu?.classList.toggle("active");
    });

    // FAQ Toggle
    document.querySelectorAll(".faq-item").forEach(item => {
        const question = item.querySelector(".faq-question");
        const toggleIcon = question?.querySelector(".faq-toggle");

        question?.addEventListener("click", () => {
            item.classList.toggle("active");
            toggleIcon.textContent = item.classList.contains("active") ? "-" : "+";

            document.querySelectorAll(".faq-item").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-toggle")?.textContent = "+";
                }
            });
        });
    });

    // Reviews Slider
    const track = document.querySelector(".reviews-track");
    const reviews = document.querySelectorAll(".review-box");
    const reviewsToShow = 3;
    let currentIndex = 0;

    if (track && reviews.length > reviewsToShow) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % (reviews.length - reviewsToShow + 1);
            track.style.transform = `translateX(${currentIndex * -300}px)`; // Adjust width if necessary
        }, 3000);
    }
});

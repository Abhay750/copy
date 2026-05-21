const menuBtn = document.querySelector(".menu");
        const mobileMenu = document.querySelector(".mobile-menu");
        const closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
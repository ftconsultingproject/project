    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".nav a");

        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // 화면 크기에 따라 offset 값 다르게 설정
                    const offset = window.innerWidth <= 768 ? -50 : -150;

                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset + offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });
    });
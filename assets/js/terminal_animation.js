document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("typed");
    const page = document.body.dataset.page;

    const wordSets = {
        home: ["about", "projects", "blog"],
        about: ["home", "projects", "blog"],
        projects: ["home", "about", "blog"],
        blog: ["home", "about", "projects"],
        post: ["home", "about", "projects", "blog"],
    };

    const words = wordSets[page] || ["home"];
    const speed = 120;
    const delay = 1500;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = words[wordIndex];
        const shown = current.substring(0, charIndex);
        el.textContent = shown;

        if (!isDeleting && charIndex < current.length) {
            charIndex++;
            setTimeout(typeEffect, 80 + Math.random() * 40);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50 + Math.random() * 30);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(typeEffect, delay);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, speed);
            }
        }
    }

    typeEffect();
});

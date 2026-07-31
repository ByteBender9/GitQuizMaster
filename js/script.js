/*========== MOBILE MENU ==========*/
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn ? .addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
    menuBtn.querySelector("i").classList.toggle("fa-bars");
    menuBtn.querySelector("i").classList.toggle("fa-xmark");
});

/*========== CLOSE MENU ==========*/
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show-menu");
        menuBtn.querySelector("i").classList.add("fa-bars");
        menuBtn.querySelector("i").classList.remove("fa-xmark");
    });
});

/*========== THEME TOGGLE ==========*/
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn ? .addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

/*========== SCROLL TOP ==========*/
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";
        scrollTopBtn.style.transform = "translateY(0)";
    } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.pointerEvents = "none";
        scrollTopBtn.style.transform = "translateY(20px)";
    }
});

scrollTopBtn ? .addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*========== HEADER SCROLL ==========*/
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(5,8,22,.92)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(5,8,22,.75)";
        header.style.boxShadow = "none";
    }
});

/*========== ACTIVE LINKS ==========*/
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*========== SMOOTH SCROLL ==========*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/*========== FAQ ACCORDION ==========*/
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const answer = item.querySelector("p");
    answer.style.maxHeight = "0px";
    answer.style.overflow = "hidden";
    answer.style.transition = ".35s ease";

    item.addEventListener("click", () => {
        const open = item.classList.contains("open");

        faqItems.forEach(f => {
            f.classList.remove("open");
            f.querySelector("p").style.maxHeight = "0px";
        });

        if (!open) {
            item.classList.add("open");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

/*========== ANIMATED COUNTERS ==========*/
const counters = document.querySelectorAll(".stat-card h2,.dashboard-card span");

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const text = counter.innerText;
        const target = parseInt(text.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 80));

        const update = () => {
            current += increment;

            if (current >= target) {
                counter.innerText = text;
            } else {
                const suffix = text.replace(/[0-9]/g, "");
                counter.innerText = current + suffix;
                requestAnimationFrame(update);
            }
        };

        update();
        counterObserver.unobserve(counter);
    });
});

counters.forEach(counter => counterObserver.observe(counter));

/*========== SCROLL REVEAL ==========*/
const revealElements = document.querySelectorAll(
    ".roadmap-card,.feature-card,.path-card,.practice-card,.dashboard-card,.command-card,.faq-item"
);

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: .15
});

revealElements.forEach(el => {
    el.classList.add("hidden");
    revealObserver.observe(el);
});

/*========== HERO PARALLAX ==========*/
const heroCard = document.querySelector(".git-card");

window.addEventListener("mousemove", e => {
    if (!heroCard) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

window.addEventListener("mouseleave", () => {
    if (heroCard) {
        heroCard.style.transform = "rotateX(0) rotateY(0)";
    }
});

/*========== TERMINAL TYPING ==========*/
const terminal = document.querySelector(".terminal");

if (terminal) {

    const commands = [
        "$ git init",
        "$ git add .",
        '$ git commit -m "First Commit"',
        "$ git branch feature-ui",
        "$ git checkout feature-ui",
        "$ git push origin main"
    ];

    let commandIndex = 0;

    setInterval(() => {

        terminal.innerHTML = "";

        for (let i = 0; i <= commandIndex; i++) {

            const line = document.createElement("span");
            line.textContent = commands[i];
            terminal.appendChild(line);

        }

        commandIndex++;

        if (commandIndex === commands.length) {
            commandIndex = 0;
        }

    }, 2000);

}

/*========== FLOATING EFFECT ==========*/
document.querySelectorAll(".stat-card,.feature-card,.practice-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/*========== RANDOM GLOW ==========*/
setInterval(() => {

    const cards = document.querySelectorAll(".roadmap-card,.path-card,.dashboard-card");

    const random = Math.floor(Math.random() * cards.length);

    cards.forEach(card => card.classList.remove("glow"));

    cards[random] ? .classList.add("glow");

}, 2500);
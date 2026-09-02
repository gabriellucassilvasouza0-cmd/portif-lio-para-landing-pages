
javascript
/* =========================================================
   PORTFÓLIO — JAVASCRIPT V1
========================================================= */


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const year =
    document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MENU MOBILE
========================================================= */

const menuButton =
    document.querySelector(".menu-button");

const nav =
    document.querySelector(".nav");


if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle("active");

            const opened =
                nav.classList.contains("active");

            menuButton.textContent =
                opened ? "✕" : "☰";

        }
    );


    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                    menuButton.textContent =
                        "☰";

                }
            );

        });

}


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(3,5,8,.95)";

            header.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.35)";

        } else {

            header.style.background =
                "rgba(3,5,8,.75)";

            header.style.boxShadow =
                "none";

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   ANIMAÇÃO REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, " +
        ".project-card, " +
        ".service, " +
        ".process-step, " +
        ".contact-content"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList
                                .add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.12
            }
        );


    revealElements.forEach(
        (element, index) => {

            element.classList.add(
                "reveal"
            );

            element.style.transitionDelay =
                `${Math.min(index * 0.04, .3)}s`;

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   FECHAR MENU AO REDIMENSIONAR
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 750 &&
            nav
        ) {

            nav.classList.remove(
                "active"
            );

            if (menuButton) {

                menuButton.textContent =
                    "☰";

            }

        }

    }
);


/* =========================================================
   LOG
========================================================= */

console.log(
    "Portfolio V1 carregado."
);
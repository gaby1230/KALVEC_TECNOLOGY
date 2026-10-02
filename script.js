/* ==================================================
   MENÚ RESPONSIVO
================================================== */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    nav.classList.toggle("open");

}



/* ==================================================
   CAMBIO DE PANELES DEL SISTEMA
================================================== */

function mostrarPanel(panelId, boton) {


    const paneles =
        document.querySelectorAll(
            ".dashboard-panel"
        );


    paneles.forEach(panel => {

        panel.classList.remove(
            "active-panel"
        );

    });


    const panel =
        document.getElementById(panelId);


    if (panel) {

        panel.classList.add(
            "active-panel"
        );

    }


    const botones =
        document.querySelectorAll(
            ".side-button"
        );


    botones.forEach(b => {

        b.classList.remove(
            "active"
        );

    });


    if (boton) {

        boton.classList.add(
            "active"
        );

    }

}



/* ==================================================
   SIMULACIÓN DE SUBIDA DE ARCHIVO
================================================== */

function simularSubida() {


    alert(

        "KALBEC AI\n\n" +

        "Sistema de organización inteligente.\n\n" +

        "En la versión completa podrás seleccionar " +
        "un documento y la Inteligencia Artificial " +
        "determinará automáticamente su categoría."

    );

}



/* ==================================================
   CONFIGURACIÓN
================================================== */

function guardarConfiguracion() {


    alert(

        "✓ CONFIGURACIÓN GUARDADA\n\n" +

        "Los cambios han sido registrados " +
        "correctamente."

    );

}



/* ==================================================
   BOTONES DE PAQUETES
================================================== */

const planButtons =
    document.querySelectorAll(
        ".plan-card button"
    );


planButtons.forEach(button => {


    button.addEventListener(
        "click",
        function() {


            const plan =
                this.closest(
                    ".plan-card"
                );


            const nombre =
                plan
                    .querySelector(
                        ".plan-header span"
                    )
                    .textContent;


            alert(

                "PAQUETE " +
                nombre.trim() +
                "\n\n" +

                "Para solicitar información " +
                "sobre este paquete puedes " +
                "comunicarte con nuestro equipo " +
                "en el apartado de contacto."

            );

        }
    );

});



/* ==================================================
   CERRAR MENÚ AL HACER CLICK
================================================== */

const links =
    document.querySelectorAll(
        ".navbar nav a"
    );


links.forEach(link => {


    link.addEventListener(
        "click",
        function() {


            const nav =
                document.querySelector(
                    ".navbar nav"
                );


            nav.classList.remove(
                "open"
            );

        }
    );

});



/* ==================================================
   ANIMACIÓN AL HACER SCROLL
================================================== */

const observer =
    new IntersectionObserver(
        entries => {


            entries.forEach(entry => {


                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


document
    .querySelectorAll(
        ".value-card, .vision-card, .plan-card, .contact-card"
    )
    .forEach(element => {

        observer.observe(element);

    });

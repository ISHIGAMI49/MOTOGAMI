/* =====================================================
   MOTOGAMI JAVASCRIPT
   ===================================================== */


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const bike =
                document.getElementById("bike").value;

            const message =
                document.getElementById("message").value;


            const formMessage =
                document.getElementById("formMessage");


            if (
                name === "" ||
                email === "" ||
                bike === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please complete all fields.";

                return;
            }


            formMessage.textContent =
                "Your request has been prepared successfully.";


            /*
             * هنا حاليا ما عندناش backend.
             *
             * من بعد نقدروا نربطو الفورم مع:
             *
             * - Email
             * - WhatsApp
             * - PHP
             * - Node.js
             * - Firebase
             * - Formspree
             *
             */


            contactForm.reset();

        }
    );

}


/* ---------- CURRENT YEAR ---------- */

const yearElements =
    document.querySelectorAll(".copyright");


yearElements.forEach(function(element) {

    element.innerHTML =
        "© " +
        new Date().getFullYear() +
        " MOTOGAMI. All Rights Reserved.";

});
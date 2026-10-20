
/* MOMENTUM GRID
   Mobile navigation, footer year, and contact form
*/

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation" : "Close navigation"
      );

      navLinks.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        navLinks.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Automatically update the copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Contact form
  const form = document.getElementById("contact-form");
  const errorMessage = document.getElementById("form-error");

  // Replace this placeholder with your business email.
  const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      if (CONTACT_EMAIL === "YOUR_EMAIL@example.com") {
        if (errorMessage) {
          errorMessage.textContent =
            "The website owner needs to configure the contact email before this form can be used.";
        }

        return;
      }

      const data = new FormData(form);

      const subject = encodeURIComponent(
        "Momentum Grid — Content Audit Enquiry"
      );

      const body = encodeURIComponent(
        `Name: ${data.get("name")}\n` +
        `Email: ${data.get("email")}\n` +
        `What I help people with: ${data.get("offer")}\n\n` +
        `Message:\n${data.get("message") || "(No additional message)"}`
      );

      window.location.href =
        `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    });
  }
});

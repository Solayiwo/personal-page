// Select the elements
const showMenuBtn = document.getElementById("showMenu");
const hideMenuBtn = document.getElementById("hideMenu");
const mobileMenu = document.getElementById("mobileNavMenu");

// Show Menu Logic
showMenuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "block"; // Shows the list
  showMenuBtn.style.display = "none"; // Hides 'bars' icon
  hideMenuBtn.style.display = "block"; // Shows 'X' icon
});

// Hide Menu Logic
hideMenuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none"; // Hides the list
  showMenuBtn.style.display = "block"; // Shows 'bars' icon
  hideMenuBtn.style.display = "none"; // Hides 'X' icon
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".navmenu .navlink");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    showMenuBtn.style.display = "block";
    hideMenuBtn.style.display = "none";
  });
});

const techData = {
  frontend: [
    { src: "assets/images/icons8-html.svg", alt: "HTML" },
    { src: "assets/images/icons8-css.svg", alt: "CSS" },
    { src: "assets/images/icons8-bootstrap.svg", alt: "Bootstrap" },
    { src: "assets/images/icons8-tailwindcss.svg", alt: "Tailwind" },
    { src: "assets/images/icons8-javascript.svg", alt: "JavaScript" },
    { src: "assets/images/icons8-react.svg", alt: "React.js" },
    { src: "assets/images/icons8-nextjs.svg", alt: "Next.js" },
    { src: "assets/images/react-native.svg", alt: "ReactNative" },
    { src: "assets/images/ui-ux.svg", alt: "UI/UX" },
  ],
  backend: [
    { src: "assets/images/icons8-python.svg", alt: "Python" },
    { src: "assets/images/icons8-nodejs.svg", alt: "Node.js" },
    { src: "assets/images/icons8-django.svg", alt: "Django" },
    { src: "assets/images/icons8-mysql.svg", alt: "MySQL" },
    { src: "assets/images/icons8-postgres.svg", alt: "Postgres" },
    { src: "assets/images/supabase.svg", alt: "Supabase" },
  ],
  others: [
    { src: "assets/images/icons8-visual-studio-code-2019.svg", alt: "VS Code" },
    { src: "assets/images/icons8-git.svg", alt: "Git" },
    { src: "assets/images/icons8-github.svg", alt: "GitHub" },
    { src: "assets/images/figma.svg", alt: "Figma" },
    { src: "assets/images/linux.svg", alt: "Linux" },
    { src: "assets/images/icons8-trello.svg", alt: "Trello" },
    { src: "assets/images/icons8-slack.svg", alt: "Slack" },
    { src: "assets/images/icons8-discord.svg", alt: "Discord" },
  ],
};

const stackContainer = document.getElementById("stacklist");

function renderStack(category) {
  const items = techData[category];
  let htmlString = `<div class="stack-grid">`;

  items.forEach((item) => {
    htmlString += `
      <div class="grid">
        <img src="${item.src}" alt="${item.alt}" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <span class="alt-fallback" style="display:none;">${item.alt}</span>
      </div>`;
  });

  htmlString += `</div>`;
  stackContainer.innerHTML = htmlString;
}

// Event Listeners
document
  .getElementById("btn-frontend")
  .addEventListener("click", () => renderStack("frontend"));
document
  .getElementById("btn-backend")
  .addEventListener("click", () => renderStack("backend"));
document
  .getElementById("btn-others")
  .addEventListener("click", () => renderStack("others"));

renderStack("frontend");

// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("wVK3RlxoiTE8gIjBS");
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Change button text to show it's sending
  const submitBtn = this.querySelector('input[type="submit"]');
  const originalValue = submitBtn.value;
  submitBtn.value = "Sending...";
  submitBtn.disabled = true;

  // Use sendForm just like in React
  emailjs
    .sendForm("service_pqlf65o", "template_6j65zod", this)
    .then(() => {
      alert("Message sent to Solam!");
      contactForm.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Oops! Something went wrong.");
    })
    .finally(() => {
      // Restore button
      submitBtn.value = originalValue;
      submitBtn.disabled = false;
    });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Show button after scrolling down 400px
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

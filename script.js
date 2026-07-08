// ============================================================
// PROJECTS DATA
// TODO: Replace these with your real projects!
// Each project needs: title, description, tags, and optional links.
// Ask Copilot: "Add a project card for a [project type] called [name]"
// ============================================================
const projects = [
  {
    title: "Seedbot: An Agricultural Law Q&A Chatbot",
    description: "A chatbot designed to simplify agricultural law for farmers using Retrieval-Augmented Generation (RAG) to provide accurate and context-aware answers.",
    tags: ["Python", "NLP", "RAG"],
    poster: "images/Agribot Final Poster-ABRCMS FINAL-1.png"
  },
  {
    title: "Examining Polling Location Changes After the Shelby Decision ",
    description: "A data analysis project that investigates the impact of the Shelby v. Holder decision on polling locations in Georgia, utilizing Python, R and data visualization techniques to uncover trends and insights.",
    tags: ["Python", "R", "Data Analysis", "Data Visualization"],
    poster: "images/Dream Makers Summit Voting Poster.jpg",
  },
  {
    title: "An Early Study on Air Pollution in Minority Communities",
    description: "A research project that explores the correlation between air pollution levels and minority communities in 28 Georgia counties, employing statistical analysis and data visualization to highlight environmental justice issues.",
    tags: ["R", "Data Analysis", "Data Visualization", "Environmental Justice"],
    poster: "images/EJSP EPA Poster.jpg",
  }
];

// ============================================================
// SKILLS DATA
// TODO: Replace with your actual skills.
// Ask Copilot to help format this list based on your resume.
// ============================================================
const skills = [
  "Python", "R", "C++",
  "HTML & CSS", "Git & GitHub",
  "React", "CLI",
  "SQL", "PHP"
];

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project-card">
        <img src="${project.poster}" alt="${project.title} poster" class="project-poster" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ""}
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

function setupPosterModal() {
  const modal = document.getElementById("poster-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.querySelector(".modal .close");
  const projectsContainer = document.getElementById("projects-container");

  if (!modal || !modalImage || !closeModal || !projectsContainer) return;

  // Listen on the container so posters added by renderProjects() still work.
  projectsContainer.addEventListener("click", (event) => {
    const poster = event.target.closest(".project-poster");
    if (!poster || !projectsContainer.contains(poster)) return;

    modal.style.display = "block";
    modalImage.src = poster.src;
    modalImage.alt = poster.alt;
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function syncDarkModeToggle(theme) {
  const toggle = document.querySelector(".dark-mode-toggle");
  if (!toggle) return;

  const isDarkMode = theme === "dark";
  const text = toggle.querySelector(".dark-mode-toggle__text");
  const icon = toggle.querySelector(".dark-mode-toggle__icon");

  toggle.setAttribute("aria-pressed", String(isDarkMode));
  toggle.setAttribute(
    "aria-label",
    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
  );

  if (text) text.textContent = isDarkMode ? "Light mode" : "Dark mode";
  if (icon) icon.textContent = isDarkMode ? "☀" : "◐";
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll("[data-reveal]");

  if (!animatedElements.length) return;

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  animatedElements.forEach((element) => observer.observe(element));
}

// Call the setup function after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  setupPosterModal();
});

// ============================================================
// RENDER SKILLS
// ============================================================
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((skill) => `<span class="skill-badge">${skill}</span>`)
    .join("");
}

// ============================================================
// DARK MODE TOGGLE
// ============================================================
function toggleDarkMode() {
  const html = document.documentElement; // Select the <html> element
  const isDarkMode = html.getAttribute("data-theme") === "dark";
  const nextTheme = isDarkMode ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  syncDarkModeToggle(nextTheme);
}

// Apply saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light mode
  document.documentElement.setAttribute("data-theme", savedTheme);
  syncDarkModeToggle(savedTheme);
});

// ============================================================
// UPDATE FOOTER YEAR
// ============================================================
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  updateYear();
  setupScrollAnimations();

  // TODO: Wire up your dark mode toggle button here once you add it
});

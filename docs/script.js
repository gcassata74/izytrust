const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-language-button]");
const contactLink = document.querySelector("[data-contact-link]");

const metadata = {
  en: {
    title: "IzyTrust | Security gateway for AI agents and MCP tools",
    description:
      "Govern AI agent access to MCP tools with policy enforcement, human approvals and audit-ready evidence.",
    contact: "https://izylifesolutions.com/#contacts",
  },
  it: {
    title: "IzyTrust | Gateway di sicurezza per agenti AI e strumenti MCP",
    description:
      "Governa l’accesso degli agenti AI agli strumenti MCP con policy, approvazioni umane ed evidenze per l’audit.",
    contact: "https://izylifesolutions.com/it/#contacts",
  },
};

function setLanguage(language, persist = true) {
  const selected = metadata[language] ? language : "en";
  root.dataset.language = selected;
  root.lang = selected;
  document.title = metadata[selected].title;
  document.querySelector('meta[name="description"]').content = metadata[selected].description;
  contactLink.href = metadata[selected].contact;

  languageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      button.dataset.languageButton === selected ? "true" : "false",
    );
  });

  if (persist) {
    localStorage.setItem("izytrust-language", selected);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageButton));
});

const storedLanguage = localStorage.getItem("izytrust-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
setLanguage(storedLanguage || browserLanguage, false);

document.querySelector("#year").textContent = new Date().getFullYear();

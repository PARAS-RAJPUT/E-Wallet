// Dark mode toggle with local preference
(function () {
  const storageKey = "hushh-theme";
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  const getPreferred = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  };

  let current = getPreferred();
  applyTheme(current);

  btn.addEventListener("click", () => {
    current = current === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, current);
    applyTheme(current);
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();



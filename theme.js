(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const getTheme = () => root.getAttribute("data-theme") === "dark" ? "dark" : "light";

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    button.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  };

  applyTheme(getTheme());

  button.addEventListener("click", () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("hatenna-theme", next);
    } catch (e) {}
  });
})();

const THEME_KEY = "fcm_theme"

export function setTheme(theme: "light" | "dark") {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem(THEME_KEY, theme)
}

export function initTheme() {
    const stored = localStorage.getItem(THEME_KEY)
    setTheme(stored === "dark" ? "dark" : "light")
}

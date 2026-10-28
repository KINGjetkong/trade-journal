export type Theme = "dark" | "light";
export const THEME_KEY = "journal-theme-v1";
export const themePreference = (value: string | null): Theme => {
  if (value === "light" || value === "dark") return value;
  return "light";
};

export const THEME_INIT_SCRIPT = `(()=>{let saved=null;try{saved=localStorage.getItem(${JSON.stringify(THEME_KEY)})}catch{}const theme=saved==="dark"?"dark":"light";document.documentElement.classList.toggle("dark",theme==="dark")})();`;

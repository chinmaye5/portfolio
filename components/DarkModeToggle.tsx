"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-comic-primary text-white px-3 py-1 rounded-full shadow-lg hover:opacity-90 transition"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

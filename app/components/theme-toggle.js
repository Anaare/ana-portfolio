"use client"; // This remains important for client-side functionality

import { FaMoon, FaSun } from "react-icons/fa"; // Keep these if you still want them as fallback or specific states
import { Button } from "./button"; // Keep your Button component if you want to wrap the toggle with its styling
import { useTheme } from "next-themes";
import { useState, useEffect } from "react"; // Only need useEffect for initial mount check, but next-themes handles most of this

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme(); // resolvedTheme gives "light" or "dark" after hydration
  const [mounted, setMounted] = useState(false); // To prevent hydration mismatch for theme state

  // useEffect runs only on the client, so we can safely check `resolvedTheme`
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null on the server to prevent hydration mismatches
  if (!mounted) {
    return null;
  }

  // Determine if it's currently dark based on the resolvedTheme
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center justify-center gap-2">
      {" "}
      {/* Added justify-center for visual alignment */}
      {/* Sun Icon (You can replace FaSun with your SVG if preferred) */}
      {/* Using FaSun for simplicity, as it's already imported. */}
      {/* If you want the exact SVG, copy it from your example */}
      <FaSun
        className={`size-6 ${
          isDark ? "text-muted-foreground" : "text-primary"
        }`}
      />
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")} // Use isDark from resolvedTheme
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
          isDark ? "bg-primary-foreground" : "bg-secondary" // Use your theme colors for better consistency
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-background transition-transform ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      {/* Moon Icon (You can replace FaMoon with your SVG if preferred) */}
      {/* Using FaMoon for simplicity, as it's already imported. */}
      {/* If you want the exact SVG, copy it from your example */}
      <FaMoon
        className={`size-5 ${
          isDark ? "text-primary" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const nextTheme = stored ?? getSystemTheme();
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    setReady(true);
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || reduceMotion) {
      document.documentElement.classList.add("theme-animating");
      applyTheme(nextTheme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("theme-animating");
      }, 320);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => applyTheme(nextTheme));
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      className="theme-capsule"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle color theme"
      data-theme-state={ready ? theme : "light"}
    >
      <span className="theme-capsule-thumb" aria-hidden="true" />
      <span className="theme-capsule-icon is-sun" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </span>
      <span className="theme-capsule-icon is-moon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21 13.2A9 9 0 1 1 10.8 3a1 1 0 0 1 .85 1.53A7 7 0 0 0 19.47 12a1 1 0 0 1 1.53 1.2Z"
          />
        </svg>
      </span>
    </button>
  );
}

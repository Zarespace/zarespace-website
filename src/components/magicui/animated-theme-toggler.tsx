"use client";

import { Moon, SunDim } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current || !mounted) return;

    const newTheme = theme === "light" ? "dark" : "light";

    // Check if browser supports view transitions
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  if (!mounted) {
    return (
      <button className={cn("h-9 w-9 flex items-center justify-center", className)}>
        <SunDim className="h-4 w-4" />
      </button>
    );
  }

  const isDarkMode = resolvedTheme === "dark";

  return (
    <button 
      ref={buttonRef} 
      onClick={changeTheme} 
      className={cn("h-9 w-9 flex items-center justify-center transition-colors hover:bg-accent hover:text-accent-foreground rounded-md", className)}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <SunDim className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <LuSun className="size-6 hover:fill-black dark:hover:fill-white hover:scale-110" />
      ) : (
        <LuMoon className="size-6 hover:fill-black dark:hover:fill-white hover:scale-110" />
      )}
    </button>
  );
}

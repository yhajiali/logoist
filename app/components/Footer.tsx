"use client";
import React, { useState } from "react";
import { LuMoon, LuGithub, LuSun } from "react-icons/lu";

type Props = {};

const Footer = ({}: Props) => {
  const [themeMode, setThemeMode] = useState("dark");

  return (
    <footer className="w-full px-4 py-4 flex flex-col gap-4 justify-center items-center border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:py-6">
      {/* Authors */}
      <div className="w-full max-w-7xl flex flex-col gap-4 justify-between text-center lg:flex-row font-mono text-sm">
        <span>
          Built by{" "}
          <a
            className="text-blue-400 underline hover:text-blue-300"
            href="http://linkedin.com/in/yhajiali"
            target="_blank"
            rel="nooppener noreferrer"
          >
            yhajiali
          </a>
          ,{" "}
          <a
            className="text-blue-400 underline hover:text-blue-300"
            href="https://www.linkedin.com/in/aleksandr-balkhanov-56221b289/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Alexsandr
          </a>
          ,{" "}
          <a
            className="text-blue-400 underline hover:text-blue-300"
            href="https://www.linkedin.com/in/elberd-galaiev-8a81351b2/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Elberd
          </a>{" "}
          and{" "}
          <a
            className="text-blue-400 underline hover:text-blue-300"
            href="http://linkedin.com/in/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Nicholas
          </a>
        </span>

        {/* Buttons */}
        <div className="flex justify-center divide-x divide-gray-500 dark:divide-white">
          <button
            className="px-2"
            onClick={() =>
              themeMode === "dark"
                ? setThemeMode("light")
                : setThemeMode("dark")
            }
          >
            {themeMode === "dark" ? (
              <LuSun className="size-6 hover:fill-white hover:scale-110" />
            ) : (
              <LuMoon className="size-6 hover:fill-white hover:scale-110" />
            )}
          </button>
          <a
            href="https://github.com/yhajiali/logoai"
            target="_blank"
            rel="nooppener noreferrer"
            className=" px-2"
          >
            <LuGithub className="size-6 hover:fill-white hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-3 flex justify-center max-w-7xl w-full dark:border-neutral-500 dark:text-gray-200 font-mono text-sm text-center">
        <b> Logoist &copy; {new Date().getFullYear()}</b>
      </div>
    </footer>
  );
};

export default Footer;

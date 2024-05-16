"use client";

import React from "react";
import { LuGithub } from "react-icons/lu";
import { ThemeSwitcher } from "./ui/ThemeSwitcher";

type Props = {};

const authors = [
  {
    name: "yhajiali",
    link: "http://linkedin.com/in/yhajiali",
  },
  {
    name: "Elberd",
    link: "http://linkedin.com/in/elberd-galaiev-8a81351b2",
  },
  {
    name: "Shakhzodbek",
    link: "http://linkedin.com/in/shakhzodbek-sabirov-3b0818221",
  },
];

const Footer = ({}: Props) => {
  return (
    <footer className="w-full px-4 py-4 flex flex-col gap-4 justify-center items-center border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:py-6">
      <div className="w-full max-w-7xl flex flex-col gap-4 justify-between text-center lg:flex-row font-mono text-sm">
        {/* Authors */}
        <p>
          Built by{" "}
          {authors.map((author, index) => (
            <span key={author.name}>
              <a
                className="text-blue-400 underline hover:text-blue-300"
                href={author.link}
                target="_blank"
              >
                {author.name}
              </a>
              {index !== authors.length - 1 && ", "}
            </span>
          ))}
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center divide-x divide-gray-500 dark:divide-white gap-2">
          <ThemeSwitcher />

          <a href="https://github.com/yhajiali/logoist" target="_blank">
            <LuGithub className="size-6 hover:fill-black dark:hover:fill-white hover:scale-110 mx-2" />
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

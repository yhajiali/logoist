import React from "react";
// Icons
import { LuMoon, LuGithub } from "react-icons/lu";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-4 py-8 w-full flex flex-col gap-4 justify-center items-center border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      {/* Authors */}
      <div className="w-full max-w-7xl flex justify-between font-mono text-sm">
        <span>
          Built by{" "}
          <a
            className="text-blue-400 underline"
            href="http://linkedin.com/in/yhajiali"
            target="_blank"
            rel="nooppener noreferrer"
          >
            yhajiali
          </a>
          ,{" "}
          <a
            className="text-blue-400 underline"
            href="https://www.linkedin.com/in/aleksandr-balkhanov-56221b289/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Alexsandr
          </a>{" "}
          and{" "}
          <a
            className="text-blue-400 underline"
            href="http://linkedin.com/in/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Nikko
          </a>
        </span>

        <div className="flex justify-between divide-x">
          <button className="px-2">
            <LuMoon className="size-6 hover:fill-white hover:scale-110" />
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
      <div className="border-t border-gray-700 pt-3 flex justify-center max-w-7xl w-full dark:border-neutral-500 text-gray-200 font-mono text-sm">
        <span>&copy;2024 Name</span>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 px-4 py-8 w-full flex justify-center items-center border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="border-t border-gray-300 pt-3 flex justify-center max-w-7xl w-full dark:border-neutral-500 font-mono">
        <p>
          Created by{" "}
          <a
            href="http://linkedin.com/in/yhajiali"
            target="_blank"
            rel="nooppener noreferrer"
          >
            yhajiali
          </a>
          ,{" "}
          <a
            href="http://linkedin.com/in/yhajiali"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Alexsandr
          </a>{" "}
          and{" "}
          <a
            href="http://linkedin.com/in/yhajiali"
            target="_blank"
            rel="nooppener noreferrer"
          >
            Nikko
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  delay: string;
};

const RadioInput = ({ delay }: Props) => {
  return (
    <button
      className="flex sm:flex-1 items-center justify-center gap-2 w -1/4 min-w-32 h-10 bg-transparent border border-gray-700 rounded-md transition duration-300 drop-shadow-md shadow-blue-400 hover:-translate-y-2 animate-fadeUp active:border-blue-400"
      style={{ animationDelay: delay }}
      type="button"
    >
      <HeartIcon className="size-5" />
      <span className="text-sm font-semibold">Style</span>
    </button>
  );
};

export default RadioInput;

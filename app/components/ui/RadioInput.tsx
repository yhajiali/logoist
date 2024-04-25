import { Squares2X2Icon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  delay: string;
  flexDirection?: string;
  logoName?: string;
};

const RadioInput = ({ delay, flexDirection, logoName }: Props) => {
  return (
    <button
      className={`flex ${flexDirection} sm:flex-1 items-center justify-center gap-2 w-1/4 min-w-32 h-16 bg-transparent border border-gray-700 rounded-md transition duration-300 drop-shadow-md shadow-blue-400 hover:-translate-y-2 animate-fadeUp active:border-blue-400`}
      style={{ animationDelay: delay }}
      type="button"
    >
      <Squares2X2Icon className="size-5" />
      {logoName && <span className="text-sm font-semibold">{logoName}</span>}
    </button>
  );
};

export default RadioInput;

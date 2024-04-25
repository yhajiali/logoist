import { Squares2X2Icon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  delay: string;
  flexDirection?: string;
  logoName?: string;
  icon?: boolean;
};

const RadioInput = ({ delay, flexDirection, logoName, icon }: Props) => {
  return (
    <button
      className={`flex ${flexDirection} flex-1 items-center justify-center gap-2 min-w-full sm:min-w-32 h-16 bg-transparent border border-gray-700 rounded-md transition duration-300 drop-shadow-md shadow-blue-400 hover:-translate-y-2 hover:text-blue-400 animate-fadeUp active:border-blue-400`}
      style={{ animationDelay: delay }}
      type="button"
    >
      <Squares2X2Icon className="size-5" />
      <span className="text-sm font-semibold">
        {!icon && (logoName || "Logo Name")}
      </span>
    </button>
  );
};

export default RadioInput;

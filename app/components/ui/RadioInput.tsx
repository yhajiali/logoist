import { Squares2X2Icon } from "@heroicons/react/24/outline";

import React, { useState } from "react";

type Props = {
  delay: string;
  flexDirection?: string;
  logoName?: string;
  icon?: boolean;
  styleOption: number;
  checked: boolean;
  onInputChange: (value: number, logoProperty: string) => void;
};

const RadioInput = ({
  delay,
  flexDirection,
  logoName,
  onInputChange,
  styleOption,
  icon,
  checked,
}: Props) => {
  return (
    <label
      className={`flex ${flexDirection} items-center justify-center gap-2 min-w-full flex-1 sm:min-w-32 h-16 bg-transparent border ${
        checked ? "border-blue-400 text-blue-400" : "border-gray-700"
      } rounded-md transition duration-300 drop-shadow-md shadow-blue-400 hover:-translate-y-2 hover:text-blue-400 animate-fadeUp hover:cursor-pointer hover:border-blue-400`}
      style={{ animationDelay: delay }}
    >
      <input
        type="radio"
        className="sr-only" // Hide the radio button visually
        name="logo-style"
        value={styleOption}
        onClick={() => onInputChange(styleOption, "style")} // Store style in logoData object state
      />
      <Squares2X2Icon className="size-5" />
      <span className="text-sm font-semibold">
        {!icon && (logoName || "Logo Name")}
      </span>
    </label>
  );
};

export default RadioInput;

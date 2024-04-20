"use client";

import React from "react";
import TextInput from "./ui/TextInput";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type Props = {
  handleSubmit: () => void;
};

const LogoForm = (props: Props) => {
  return (
    <form className="w-full max-w-5xl h-full flex flex-col items-center justify-center gap-6">
      <TextInput
        label="Enter Your Logo Name"
        placeholder="Logo Name"
        name="logo-name"
      />
      <TextInput
        label="Choose your style"
        placeholder="Logo Style"
        name="logo-style"
      />

      <button
        type="button"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex gap-2"
        onClick={() => props.handleSubmit()}
      >
        Generate Logo{" "}
        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <ArrowLongRightIcon className="size-5" />
        </span>
      </button>
    </form>
  );
};

export default LogoForm;

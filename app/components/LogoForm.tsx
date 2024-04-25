"use client";

import React, { useEffect, useState } from "react";
import TextInput from "./ui/TextInput";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import RadioInput from "./ui/RadioInput";

type Props = {
  handleSubmit: () => void;
};

const LogoForm = (props: Props) => {
  const [logoName, setLogoName] = useState("");
  const [inputValue, setInputValue] = useState("Logo Name");

  useEffect(() => {
    setLogoName(inputValue);
  }, [logoName]);
  return (
    <form className="w-full max-w-3xl h-full flex flex-col items-center justify-center gap-6">
      <TextInput
        label="Enter Your Logo Name"
        placeholder="Logo Name"
        name="logo-name"
        setInputValue={setInputValue}
      />
      <TextInput
        label="Tell us a bit about your Brand"
        placeholder="Logo Description"
        name="logo-description"
        textarea
      />
      <div className="w-full flex flex-col gap-6">
        <label htmlFor={"test"} className="animate-fadeUp">
          Choose a Logo Style
        </label>
        <div className="flex items-center justify-evenly gap-4 flex-wrap sm:justify-normal">
          <RadioInput delay="600ms" logoName={inputValue} />
          <RadioInput
            delay="700ms"
            logoName={inputValue}
            flexDirection="flex-col"
          />
          <RadioInput delay="900ms" icon />
        </div>
      </div>

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

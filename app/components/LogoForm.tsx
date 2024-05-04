"use client";
import React, { useEffect } from "react";
import TextInput from "./ui/TextInput";
import RadioInput from "./ui/RadioInput";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useUser, useClerk } from "@clerk/nextjs";

type Props = {
  handleSubmit: () => void;
  logoData: { name: string; description: string; style: number };
  setLogoData: (data: {
    name: string;
    description: string;
    style: number;
  }) => void;
  loading: boolean;
};

const LogoForm = ({ handleSubmit, logoData, setLogoData, loading }: Props) => {
  useEffect(() => {
    // Reset logoData to initial state onmount
    setLogoData({
      ...logoData,
      name: "",
      description: "",
      style: 0,
    });
  }, []);

  // Store logoData from User's input
  const onInputChange = (value: string | number, logoProperty: string) => {
    setLogoData({ ...logoData, [logoProperty]: value });
  };

  const { user } = useUser();
  const { openSignUp } = useClerk();

  return (
    <form
      className={`${
        loading ? "hidden lg:flex" : "flex" // Hide form in small screens
      } w-full max-w-3xl h-full flex-col items-center justify-center gap-6`}
      onSubmit={(e) => {
        // Prevent default form submission behavior
        e.preventDefault();

        if (!user) {
          openSignUp();
          return;
        }

        handleSubmit();
      }}
    >
      <TextInput
        label="Enter Your Logo Name"
        placeholder="Logo Name"
        name="logo-name"
        onInputChange={onInputChange}
      />
      <TextInput
        label="Tell us a bit about your Brand"
        placeholder="Logo Description"
        name="logo-description"
        textarea
        onInputChange={onInputChange}
      />
      <div className="w-full flex flex-col gap-6">
        <label htmlFor={"test"} className="animate-fadeUp">
          Choose a Logo Style
        </label>
        <div className="flex items-center justify-evenly gap-4 flex-wrap sm:justify-normal">
          <RadioInput
            delay="600ms"
            logoName={logoData.name} // Dynamically fill in Style buttons with Logo Name inputted by the user.
            onInputChange={onInputChange}
            styleOption={1}
            checked={logoData.style === 1}
          />
          <RadioInput
            delay="700ms"
            logoName={logoData.name} // Dynamically fill in Style buttons with Logo Name inputted by the user.
            flexDirection="flex-col"
            onInputChange={onInputChange}
            styleOption={2}
            checked={logoData.style === 2}
          />
          <RadioInput
            delay="900ms"
            icon
            onInputChange={onInputChange}
            styleOption={3}
            checked={logoData.style === 3}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex gap-2"
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

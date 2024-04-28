import React from "react";
import Image from "next/image";
import {
  ArrowDownTrayIcon,
  ArrowLongLeftIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type Props = {
  imageSrc: string;
  error: string;
  setShowLogoForm: (set: boolean) => void;
  handleSubmit: () => void;
};

const LogoResult: React.FC<Props> = ({
  imageSrc,
  error,
  setShowLogoForm,
  handleSubmit,
}) => {
  return (
    <div className="relative w-full max-w-3xl h-full flex flex-col justify-center items-center gap-4 animate-slide-in">
      {/* Back to Logo Form */}
      <button
        type="button"
        className="group self-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col md:flex-row justify-center items-center gap-2 text-xs"
        onClick={() => setShowLogoForm(true)}
      >
        <span className="transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
          <ArrowLongLeftIcon className="size-5" />
        </span>
        Edit Logo Details
      </button>

      {!error ? (
        <Image
          src={imageSrc}
          alt="Your generated Logo"
          className="size-80"
          width={350}
          height={350}
        />
      ) : (
        // Display error in logo container
        <div className="w-full max-w-3xl h-full px-4 flex justify-center items-center animate-slide-in">
          <p className="text-center text-red-400 font-semibold ">{error}</p>
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href={imageSrc}
          className="w-full md:w-auto group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col md:flex-row justify-center items-center gap-2"
          target="_blank"
          download
        >
          Download
          <span className="transition-transform group-hover:-translate-y-1 motion-reduce:transform-none">
            <ArrowDownTrayIcon className="size-5" />
          </span>
        </a>
        <button
          type="button"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col md:flex-row justify-center items-center gap-2"
          onClick={() => handleSubmit()}
        >
          Regenerate Logo
          <span className="transition-transform group-hover:rotate-180 motion-reduce:transform-none">
            <ArrowPathIcon className="size-5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LogoResult;

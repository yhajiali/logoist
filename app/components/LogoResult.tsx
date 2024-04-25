import React from "react";
import Image from "next/image";
import {
  ArrowDownTrayIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type Props = {
  imageSrc: string;
};

const LogoResult: React.FC<Props> = ({ imageSrc }) => {
  return (
    <div className="w-full max-w-3xl h-full flex flex-col justify-center items-center gap-6 animate-slide-in">
      <Image src={imageSrc} alt="test" width={475} height={475} />
      <div className="flex gap-4">
        <button
          type="button"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex gap-2"
        >
          Download
          <span className="transition-transform group-hover:-translate-y-1 motion-reduce:transform-none">
            <ArrowDownTrayIcon className="size-5" />
          </span>
        </button>
        <button
          type="button"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex gap-2"
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

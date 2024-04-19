import TextInput from "./components/TextInput";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6 z-10 max-w-5xl w-full font-mono text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <form action="" className="w-full flex flex-col gap-6">
        <TextInput label="Enter Your Logo Name" placeholder="Logo Name" />
        <TextInput label="Choose your style" placeholder="Logo Style" />

        <button
          type="submit"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex gap-2 m-auto"
        >
          Generate Logo{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <ArrowLongRightIcon className="size-5" />
          </span>
        </button>
      </form>
    </main>
  );
}

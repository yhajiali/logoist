import React from "react";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-7xl py-2 px-6">
      <div className="block md:flex items-end gap-3">
        <Image src="/Logo.PNG" alt="Logoist" width="65" height="65" />
        {/* TODO: find better logo */}
      </div>

      {/* Display on mobile devices */}
      <div className="sm:hidden flex gap-4 justify-center items-center">
        <SignedIn>
          <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button>
              <UserCircleIcon className="size-7 hover:text-blue-400 tranisition duration-300" />
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      {/* Display on small-tablets to large screen, desktops.. */}
      <div className="hidden sm:flex gap-4 justify-center items-center font-mono text-sm">
        <SignedIn>
          <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400 py-2 px-4 transition duration-300 ease-in-out">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
              Sign up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;

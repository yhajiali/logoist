import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <header style={{ position: "absolute", display: "flex", justifyContent: "space-between", padding: 10, width: '100%' }}>
      <div className="block md:flex items-end gap-3">
        <Image src="/Logo.PNG" alt="LogoAI" width="80" height="75" /> 
        {/* TODO: find better logo */}
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <SignedIn>
          <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-blue-300 border border-blue-500 hover:text-white hover:bg-[#2d06ff4a] py-2 px-4 rounded-3xl transition duration-300 ease-in-out">Sign in</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-white text-black py-2 px-4 rounded-3xl transition duration-300 ease-in-out">Sign up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}

export const metadata: Metadata = {
  title: "LogoAI",
  description: "LogoAI is a cutting-edge logo design service that creates unique, custom logos tailored to your brand's identity. Our streamlined process ensures a seamless experience, providing you with a distinctive logo that sets your brand apart in today's competitive market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

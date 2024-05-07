import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logoist",
  description:
    "Logoist is a cutting-edge logo design service that creates unique, minimalistic logos tailored to your brand's identity. Our streamlined process ensures a seamless experience, providing you with a distinctive logo that sets your brand apart in today's competitive market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} h-svh w-screen flex flex-col justify-between items-center dark:bg-black`}
        >
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

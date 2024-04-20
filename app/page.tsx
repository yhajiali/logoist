"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import LogoForm from "./components/LogoForm";
import LogoResult from "./components/LogoResult";
import Loading from "./components/ui/Loading";

export default function Home() {
  const [showLogoResult, setShowLogoResult] = useState(false);
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header>
        <button onClick={() => setShowLogoResult(!showLogoResult)}>Show</button>
      </header>

      <main className="flex flex-col items-center justify-center gap-10 divide-y divide-slate-500 px-10 py-20 w-full h-full font-mono text-sm lg:flex-row lg:divide-x lg:divide-y-0">
        <LogoForm />
        <Loading message="Generating Logo..." />
        {showLogoResult && <LogoResult />}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import LogoForm from "./components/LogoForm";
import LogoResult from "./components/LogoResult";
import Loading from "./components/ui/Loading";

export default function Home() {
  const [showLogoResult, setShowLogoResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    !showLogoResult && setLoading(true);
    {
      setTimeout(() => {
        setLoading(false);
        setShowLogoResult(true);
      }, 3000);
    }
  };
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header className=""></header>

      <main className="flex flex-col items-center justify-center gap-10 divide-y divide-slate-500 px-10 py-20 w-full h-full font-mono text-sm lg:flex-row lg:divide-x lg:divide-y-0">
        <LogoForm handleSumbit={handleSubmit} />
        {loading && <Loading message="Generating Logo..." />}
        {showLogoResult && <LogoResult />}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

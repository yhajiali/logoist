"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LogoForm from "./components/LogoForm";
import LogoResult from "./components/LogoResult";
import Loading from "./components/ui/Loading";

export default function Home() {
  const [showLogoResult, setShowLogoResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Reset state upon component mount (page refresh)
    setShowLogoResult(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (imageUrl) {
      setLoading(false);
      setShowLogoResult(true);
    }
  }, [imageUrl]);

  function handleSubmit() {
    setImageUrl("");
    console.log("handleSubmit");
    !showLogoResult && setLoading(true);
    getImageData();
  }

  const getImageData = async () => {
    try {
      // setLoading(true);
      const response = await fetch('/api/replicate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: `Logo design for a coffee shop. Make sure to surround the logo with fire.` })
        // body: JSON.stringify({ prompt: `${prompt}` })
      });
      const { imageUrl } = await response.json();
      console.log("Image URL in the front: ", imageUrl)
      setImageUrl(imageUrl);
      // setError('');
    } catch (error) {
      // setError(`An error occurred calling the Dall-E API: ${error}`);
    }
    // setLoading(false);
  };

  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header className=""></header>

      <main className="flex flex-col items-center justify-center gap-10 divide-y divide-slate-500 px-10 py-20 w-full h-full font-mono text-sm lg:flex-row lg:divide-x lg:divide-y-0">
        <LogoForm handleSubmit={handleSubmit} />
        {loading && <Loading message="Generating Logo..." />}
        {showLogoResult && <LogoResult imageSrc={imageUrl}/>}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

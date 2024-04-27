"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LogoForm from "./components/LogoForm";
import LogoResult from "./components/LogoResult";
import Loading from "./components/ui/Loading";

export default function Home() {
  const [showLogoForm, setShowLogoForm] = useState(true);
  const [showLogoResult, setShowLogoResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [logoData, setLogoData] = useState({
    name: "Logo Name",
    description: "",
    style: 1,
  });

  useEffect(() => {
    if (imageUrl) {
      setLoading(false);
      setShowLogoForm(false);
      setShowLogoResult(true);
    }
  }, [imageUrl]);

  function handleSubmit() {
    setImageUrl("");
    console.log("handleSubmit");
    console.log(logoData);
    setLoading(true);
    getImageData();
  }

  const getImageData = async () => {
    try {
      const response = await fetch("/api/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: {
            logoName: logoData.name,
            logoDescription: logoData.description,
            style: logoData.style,
          },
        }),
      });
      const { imageUrl } = await response.json();
      console.log("Image URL: ", imageUrl);
      setImageUrl(imageUrl);
      setError("");
    } catch (error) {
      setError(`An error occurred calling the Dall-E API: ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header className=""></header>

      <main className="flex flex-col items-center justify-center gap-10 divide-gray-700 px-10 py-20 w-full h-full font-mono text-sm lg:flex-row lg:divide-x lg:divide-y-0">
        {showLogoForm && (
          <LogoForm
            handleSubmit={handleSubmit}
            logoData={logoData}
            setLogoData={setLogoData}
          />
        )}

        {/* Only show logo result when not fetching image data or showing logo form */}
        {showLogoResult && !loading && !showLogoForm ? (
          <>
            <div>
              <p>{logoData.name}</p>
              <p>{logoData.description}</p>
              <p>{logoData.style}</p>
            </div>
            <LogoResult
              imageSrc={imageUrl}
              setShowLogoForm={setShowLogoForm}
              handleSumbit={handleSubmit}
            />
          </>
        ) : (
          loading && <Loading message="Generating Logo..." />
        )}

        {/* Display error below logo container */}
        {/* {error && <p className={styles.error}>{error}</p>} */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

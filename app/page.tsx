import Footer from "./components/Footer";
import LogoForm from "./components/LogoForm";
import LogoResult from "./components/LogoResult";
import TextInput from "./components/TextInput";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <header></header>

      <main className="flex flex-col items-center justify-center p-6 z-10 max-w-3xl w-full font-mono text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <LogoForm /> */}
        <LogoResult />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

import Footer from "./components/Footer";
import LogoForm from "./components/LogoForm";
import LogoResult from "./components/LogoResult";
import TextInput from "./components/TextInput";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header></header>

      <main className="flex flex-col items-center justify-center gap-10 divide-y divide-slate-500 px-10 py-20 w-full h-full font-mono text-sm lg:flex-row lg:divide-x lg:divide-y-0">
        <LogoForm />
        <LogoResult />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

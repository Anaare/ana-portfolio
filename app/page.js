import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./about/page";
import Footer from "./components/Footer";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-fuchsia-300 transition-all duration-300">
      <NavBar />
      <Hero />
      <div className="flex flex-col gap-20 px-6 max-w-6xl mx-auto">
        <About />
      </div>
      <Footer />
    </div>
  );
}

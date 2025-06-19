import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./about/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="flex flex-col gap-20 px-6 max-w-6xl mx-auto">
        <About />
      </div>
      <Footer />
    </div>
  );
}

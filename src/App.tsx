import About from "./components/About.tsx";
import Features from "./components/Features.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};
export default App;

import About from "./components/About.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};
export default App;

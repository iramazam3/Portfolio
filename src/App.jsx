import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;

import { About } from "./components/layout/About";
import { Hero } from "./components/layout/Hero";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="px-[110px] pt-[46px]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;

import { useState } from "react";
import About from "./components/about";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import {
  RiReactjsLine,
  RiJavascriptLine,
  RiPhpLine,
  RiHtml5Line,
} from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { TbSql } from "react-icons/tb";

function App() {
  const [technologies] = useState([
    { icon: RiHtml5Line, color: "text-red-500" },
    { icon: SiCss3, color: "text-blue-500" },
    { icon: RiJavascriptLine, color: "text-yellow-500" },
    { icon: RiReactjsLine, color: "text-cyan-400" },
    { icon: RiPhpLine, color: "text-purple-500" },
    { icon: TbSql, color: "text-blue-700" },
  ]);
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies technologies={technologies} />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

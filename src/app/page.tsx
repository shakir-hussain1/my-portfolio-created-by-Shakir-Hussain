import Hero from "./component/hero";
import About from "./component/about";
import Skills from "./component/skills";
import Contact from "./component/contact";
import Project from "./component/project";

// This is a project of portfolio using next.js with tailwind css
export default function Home() {
  return (
  <div>
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Project />
  </div>  
  );
}

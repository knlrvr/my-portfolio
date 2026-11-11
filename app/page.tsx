import Hero from "./components/hero";
import Frames from "./components/frames";
import Work from "./components/work";
import Writing from "./components/writing";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Frames />
      <Work />
      <Writing />
      <Projects />
      <Contact />
    </main>
  );
}

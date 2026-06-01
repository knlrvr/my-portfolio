import About from "./components/about";
import Contact from "./components/contact";
import WorkGrid from "./components/work-grid";
import Writing from "./components/writing";

export default function Home() {
  return (
    <div className="">
      <About />
      <WorkGrid />
      <Writing />
      <Contact />
    </div>
  );
}

import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import PageTop from "./components/page-top";
import SectionBreak from "./components/section-break";
import WorkGrid from "./components/work-grid";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto">
      <PageTop
        title={`Kane Lariviere`}
        desc={`Software Engineer`}
      />

      <SectionBreak label="About" />
      <About />

      <SectionBreak label="Work" />
      <WorkGrid />

      <SectionBreak label="Writing" />
      <Blog />

      <SectionBreak label="Contact" />
      <Contact />
    </div>
  );
}

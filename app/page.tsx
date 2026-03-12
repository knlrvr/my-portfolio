import About from "./components/about";
import Blog from "./components/blog";
import PageTop from "./components/page-top";
import SectionBreak from "./components/section-break";
import WorkGrid from "./components/work-grid";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <PageTop
        title={`Kane Lariviere`}
        desc={`US-based Software Engineer`}
      />

      <SectionBreak label="About" />
      <About />

      <SectionBreak label="Work" />
      <WorkGrid />

      <SectionBreak label="Writing" />
      <Blog />
    </div>
  );
}

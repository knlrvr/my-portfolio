import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import PageTop from "./components/page-top";
import SectionBreak from "./components/section-break";
import WorkGrid from "./components/work-grid";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto">
      
      <PageTop
        title={`Hi, I'm Kane`}
        desc={`Software Engineer • NC, USA`}
      />

      <SectionBreak label="about" />
      <About />

      <SectionBreak label="work" />
      <WorkGrid />

      <SectionBreak label="writing" />
      <Blog />

      <SectionBreak label="get in touch" />
      <Contact />
    </div>
  );
}

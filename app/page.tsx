import { LuHandshake, LuUser } from "react-icons/lu";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import PageTop from "./components/page-top";
import SectionBreak from "./components/section-break";
import { Container } from "./components/container";
import WorkGrid from "./components/work-grid";
import { Reveal } from "./components/effects/reveal";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto mt-28">
      <Container
        title="Hi, I'm Kane"
        icon={<LuHandshake size={20} />}
        iconColor="text-blue-500"
      >
        <div className="text-neutral-700 dark:text-neutral-300">
          Software Engineer &bull; NC, USA
        </div>
      </Container>

      <About />
      <WorkGrid />
      <Blog />
      <Contact />
    </div>
  );
}

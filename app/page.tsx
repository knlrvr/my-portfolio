import { LuHandshake, LuUser } from "react-icons/lu";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import { Container, LgIconContainer } from "./components/container";
import WorkGrid from "./components/work-grid";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto mt-28">
      <LgIconContainer
        title="Hi, I'm Kane"
        icon={<LuHandshake size={28} />}
        iconColor=""
      >
        <div className="text-neutral-700 dark:text-neutral-300">
          Software Engineer &bull; North Carolina, US
        </div>
      </LgIconContainer>

      <About />
      <WorkGrid />
      <Blog />
      <Contact />
    </div>
  );
}

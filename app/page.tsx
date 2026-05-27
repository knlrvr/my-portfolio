import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import { LgIconContainer } from "./components/container";
import WorkGrid from "./components/work-grid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto mt-28">
      <LgIconContainer
        title="Hi, I'm Kane"
        icon={
          <Image src="/kn-og-nobg.png" alt="og img" width={250} height={250} className="w-8 h-8 dark:invert" />
        }
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

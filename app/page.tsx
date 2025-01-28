import About from "./components/about";
import Blog from "./components/blog";
import PageTop from "./components/page-top";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <PageTop
        title="Kane Lariviere"
        desc="Software Developer"
      />
      <About />
      <Blog />
    </div>
  );
}

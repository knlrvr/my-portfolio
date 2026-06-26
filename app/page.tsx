import Hero from "./components/hero";
import Work from "./components/work";
import Writing from "./components/writing";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <main>
        <Hero />
        <Work />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}

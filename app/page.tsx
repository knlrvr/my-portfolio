import Image from "next/image";
import About from "./components/about";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <About />

    </div>
  );
}

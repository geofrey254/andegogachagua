import Image from "next/image";
import { Hero, Navbar, Cards } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Cards />
    </main>
  );
}

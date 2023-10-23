import Image from "next/image";
import { Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}

import Image from "next/image";
import {
  Hero,
  Navbar,
  Cards,
  About,
  Services,
  Team,
  Call,
  Appointment,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Cards />
      <About />
      <Services />
      <Call />
      <Appointment />
    </main>
  );
}

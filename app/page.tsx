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
    <main className="overflow-hidden">
      <Hero />
      <Cards />
      <About />
      <Services />
      <Team />
      <Call />
      <Appointment />
      <Footer />
    </main>
  );
}

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/layout/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* дальше добавим Hero / Features / Testimonials / Footer */}
        <Hero />
        <Advantages />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
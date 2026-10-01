import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Steps } from "@/components/steps";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Benefits />
        <Steps />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

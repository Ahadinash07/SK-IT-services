import QuoteProvider from "@/components/QuoteProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import CustomPC from "@/components/CustomPC";
import Why from "@/components/Why";
import HowWeWork from "@/components/HowWeWork";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <QuoteProvider>
      <Header />
      <main>
        <Hero /><Services /><Products /><CustomPC /><Why /><HowWeWork /><Reviews /><FAQ /><Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </QuoteProvider>
  );
}

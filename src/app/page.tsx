import { Navigation } from "@/components/firelight/Navigation";
import { Hero } from "@/components/firelight/Hero";
import { FeaturedTours } from "@/components/firelight/FeaturedTours";
import { Destinations } from "@/components/firelight/Destinations";
import { LuxuryLodges } from "@/components/firelight/LuxuryLodges";
import { About } from "@/components/firelight/About";
import { Testimonials } from "@/components/firelight/Testimonials";
import { CTABanner } from "@/components/firelight/CTABanner";
import { Footer } from "@/components/firelight/Footer";
import { Chatbot } from "@/components/firelight/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <Hero />
      <FeaturedTours />
      <Destinations />
      <LuxuryLodges />
      <About />
      <Testimonials />
      <CTABanner />
      <Footer />
      <Chatbot />
    </main>
  );
}

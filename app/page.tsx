import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import StayConnectedSection from "@/components/home/StayConnectedSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ImpactSection />
        <WhatWeDoSection />
        <StayConnectedSection />
      </main>
      <Footer />
    </>
  );
}

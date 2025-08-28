import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileHero from "@/components/MobileHero";
import Partners from "@/components/Partners";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import ContactForm from "@/components/ContactForm";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <MobileHero onOpenModal={() => setIsModalOpen(true)} />
      <Partners />
      <WhyChoose />
      <Services />
      <Posts />
      <ContactForm />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;

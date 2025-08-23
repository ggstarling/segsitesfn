import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-light-blue.jpg";
import HorizontalWaves from "./HorizontalWaves";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-[#7db8e8] via-[#3481bd] to-[#1e4a66]">

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Inteligência para a gestão de ativos viários no Brasil
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Somos uma plataforma de fusão de dados com inteligência artificial para a gestão de ativos de infraestrutura viária.
          </p>

          <Button
            onClick={onOpenModal}
            size="lg"
            className="text-lg px-8 py-4 font-normal"
          >
            Agende uma conversa
          </Button>
        </div>
      </div>
      
      <HorizontalWaves />
    </section>
  );
};

export default Hero;
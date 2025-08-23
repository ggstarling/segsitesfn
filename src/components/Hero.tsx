import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-blue.jpg";
import BridgeAnimation from "./BridgeAnimation";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroBackground}')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

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
      
      <BridgeAnimation />
    </section>
  );
};

export default Hero;
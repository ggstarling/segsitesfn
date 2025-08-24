import { Button } from "@/components/ui/button";
import heroTexture from "@/assets/hero-background-minimal-blue.jpg";
import HorizontalWaves from "./HorizontalWaves";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0),
              linear-gradient(90deg, rgba(0,0,0,0.02) 50%, transparent 50%)
            `,
            backgroundSize: '20px 20px, 40px 40px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Inteligência para a gestão de ativos viários no Brasil
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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
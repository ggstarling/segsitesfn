import { Button } from "@/components/ui/button";
import heroTexture from "@/assets/hero-background-minimal-blue.jpg";
import HorizontalWaves from "./HorizontalWaves";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center bg-gray-50">
      <div className="absolute inset-0 bg-gray-50">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0),
              radial-gradient(circle at 6px 6px, rgba(0,0,0,0.04) 0.5px, transparent 0),
              linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%),
              linear-gradient(-45deg, rgba(0,0,0,0.01) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.01) 75%)
            `,
            backgroundSize: '12px 12px, 18px 18px, 8px 8px, 6px 6px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Inteligência para a gestão de ativos viários no Brasil
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Somos uma plataforma de fusão de dados com inteligência artificial para a gestão de ativos de infraestrutura viária.
          </p>

          <Button
            onClick={onOpenModal}
            size="lg"
            className="text-base px-8 py-4 font-normal"
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
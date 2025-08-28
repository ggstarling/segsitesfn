import { Button } from "@/components/ui/button";
import heroTexture from "@/assets/hero-background-minimal-blue.jpg";
import HorizontalWaves from "./HorizontalWaves";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-150">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 70%, transparent 100%),
              linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(240,240,240,0.1) 50%, rgba(255,255,255,0.2) 100%),
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(240,240,240,0.1) 0%, transparent 50%)
            `,
            backgroundSize: '200px 200px, 100% 100%, 150px 150px, 180px 180px',
            filter: 'blur(0.5px) contrast(1.1)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            <span className="text-[#3481bd] drop-shadow-[0_0_8px_rgba(52,129,189,0.3)]">Inteligência</span> para a gestão de ativos viários no Brasil
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
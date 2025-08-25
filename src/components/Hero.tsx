import { Button } from "@/components/ui/button";
import heroTexture from "@/assets/hero-background-minimal-blue.jpg";
import HorizontalWaves from "./HorizontalWaves";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(45deg, 
                rgba(255,255,255,0.8) 0%, 
                rgba(240,240,240,0.4) 25%, 
                rgba(255,255,255,0.8) 50%, 
                rgba(240,240,240,0.4) 75%, 
                rgba(255,255,255,0.8) 100%
              ),
              repeating-linear-gradient(90deg, 
                rgba(255,255,255,0.1) 0px, 
                rgba(255,255,255,0.1) 1px, 
                transparent 1px, 
                transparent 20px
              ),
              repeating-linear-gradient(0deg, 
                rgba(255,255,255,0.05) 0px, 
                rgba(255,255,255,0.05) 1px, 
                transparent 1px, 
                transparent 20px
              )
            `,
            backgroundSize: '40px 40px, 20px 20px, 20px 20px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-16">
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
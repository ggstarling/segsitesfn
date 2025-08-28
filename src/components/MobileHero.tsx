import { Button } from "@/components/ui/button";
import HorizontalWaves from "./HorizontalWaves";

interface MobileHeroProps {
  onOpenModal: () => void;
}

const MobileHero = ({ onOpenModal }: MobileHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-100 md:hidden px-4 py-16">
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
            backgroundSize: '120px 120px, 100% 100%, 90px 90px, 100px 100px',
            filter: 'blur(0.5px) contrast(1.1)'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-3 leading-tight">
          <span className="text-[#3481bd] drop-shadow-[0_0_8px_rgba(52,129,189,0.3)]">Inteligência</span> para a gestão de ativos viários no Brasil
        </h1>

        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          Somos uma plataforma de fusão de dados com inteligência artificial para a gestão de ativos de infraestrutura viária.
        </p>

        <Button
          onClick={onOpenModal}
          size="default"
          className="text-sm px-6 py-3 font-normal"
        >
          Agende uma conversa
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 h-20 overflow-hidden">
        <HorizontalWaves />
      </div>
    </section>
  );
};

export default MobileHero;
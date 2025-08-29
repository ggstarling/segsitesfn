import { Button } from "@/components/ui/button";
import MobileWaves from "./MobileWaves";

interface MobileHeroProps {
  onOpenModal: () => void;
}

const MobileHero = ({ onOpenModal }: MobileHeroProps) => {
  return (
    <section className="relative min-h-screen bg-gray-100 md:hidden px-6 pt-20 pb-20 flex flex-col justify-between">
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

      {/* Main content area - optimized vertical centering */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          {/* Title with improved typography and spacing */}
          <h1 className="text-4xl sm:text-[2.75rem] font-semibold text-gray-900 leading-[1.15] tracking-tight">
            <span className="text-[#3481bd] drop-shadow-[0_0_8px_rgba(52,129,189,0.3)]">Inteligência</span> para a gestão de ativos viários no Brasil
          </h1>

          {/* Subtitle with enhanced readability */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-2 font-light">
            Somos uma plataforma de fusão de dados com inteligência artificial para a gestão de ativos de infraestrutura viária.
          </p>

          {/* CTA button with optimized touch target */}
          <div className="pt-4">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="text-base px-8 py-4 font-medium min-h-[52px] min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agende uma conversa
            </Button>
          </div>
        </div>
      </div>
      
      <MobileWaves />
    </section>
  );
};

export default MobileHero;
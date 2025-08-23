import { Button } from "@/components/ui/button";
import smoothTexture from "@/assets/smooth-texture-blue.jpg";
import HorizontalWaves from "./HorizontalWaves";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${smoothTexture}')`
        }}
      >
        <div className="absolute inset-0 bg-[#3481bd]/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto">

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
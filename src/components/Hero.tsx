import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1712023076708-a56b83c332a9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl md:ml-0">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Inteligência para a gestão de infraestruturas
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Somos uma plataforma de fusão de dados com inteligência artificial para a gestão de ativos de infraestrutura.
          </p>

          <Button
            onClick={onOpenModal}
            size="lg"
            className="text-lg px-8 py-4"
          >
            Agende uma conversa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
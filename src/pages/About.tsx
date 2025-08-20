import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Nossa Visão */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1590767950092-42b8362368da?w=1920&h=400&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Nossa Visão</h1>
          <p className="text-xl max-w-3xl mx-auto px-4">
            Transformar a gestão de infraestruturas através da tecnologia,
            tornando o monitoramento mais eficiente e inteligente.
          </p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossa Missão</h2>
          <p className="text-lg text-muted-foreground">
            Texto da missão da Safena.
          </p>
        </div>
      </section>

      {/* Nossa Proposta de Valor */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossa Proposta de Valor</h2>
          <p className="text-lg text-muted-foreground">
            Texto da proposta de valor.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
          <p className="text-lg text-muted-foreground">
            Texto da história da Safena.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
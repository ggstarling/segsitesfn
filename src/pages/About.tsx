import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Nossa Visão */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/cc0382b7-39d8-4fc3-8fe8-8f1eb4ea851a.png')",
            backgroundPosition: "center 0%"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl text-white mb-8">Nossa Visão</h1>
            <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto"></div>
            <p className="text-xl text-white leading-relaxed max-w-xl mx-auto">
              Construir um futuro em que dados estejam integrados à gestão de estruturas viárias e à proteção de pessoas e ecossistemas.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-8">Nossa História</h2>
              <div className="w-16 h-0.5 bg-blue-500 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A <span style={{ color: '#3481bd', fontWeight: '600' }}>Safena</span> surgiu a partir do trabalho desenvolvido no Laboratório de Otimização e Confiabilidade Estrutural (CORE) da Universidade Federal de Santa Catarina (UFSC). Unindo experiência acadêmica e visão inovadora, transformamos anos de pesquisa aplicada em soluções eficientes para o setor da infraestrutura.
                </p>
                <p>
                  Nossa equipe multidisciplinar é composta por especialistas de diversas áreas da engenharia e tecnologia. Reunimos conhecimentos avançados em estruturas, sensoriamento inteligente e ciência de dados, com o objetivo de desenvolver soluções orientadas por dados para os desafios da engenharia moderna.
                </p>
                <p>
                  Somos o elo entre a pesquisa científica de ponta e as demandas reais do mercado.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1715738787671-37be6baac511?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Nossa História" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <Footer />
    </div>
  );
};

export default About;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Nossa Visão */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1590767950092-42b8362368da?w=1920&h=400&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-8">Nossa Visão</h1>
            <div className="w-16 h-1 bg-blue-500 mb-8"></div>
            <p className="text-xl text-white leading-relaxed">
              Criar a maior melhoria individual na segurança rodoviária desde o cinto de segurança, usando dados
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Nossa História</h2>
              <div className="w-16 h-1 bg-blue-500 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Fomos fundados em 2016 com a missão de transformar as operações rodoviárias. 
                  Estamos desenvolvendo IA que trabalha em conjunto com humanos para tornar a 
                  maior infraestrutura do mundo mais segura e eficiente.
                </p>
                <p>
                  Hoje trabalhamos com os maiores operadores de infraestrutura do mundo em mais 
                  de 10 países diferentes. Somos apoiados por investidores líderes em infraestrutura 
                  nos EUA e Europa. Temos escritórios no Reino Unido, Israel, Espanha e EUA.
                </p>
                <p>
                  Amamos dados e o que boas práticas de dados podem fazer.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1590767950092-42b8362368da?w=800&h=600&fit=crop" 
                alt="Nossa História" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Clientes */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Nossos Clientes</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-16"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center space-x-12 lg:space-x-20">
              <div className="flex-shrink-0">
                <div className="w-48 h-20 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-sm">Cliente 1</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-20 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-sm">Cliente 2</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-20 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-sm">Cliente 3</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-20 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-sm">Cliente 4</span>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
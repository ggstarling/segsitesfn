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
            backgroundImage: "url('https://images.unsplash.com/photo-1601647109079-070fdbc329bb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%3D%3D')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-2xl ml-0">
            <h1 className="text-5xl text-white mb-8">Nossa Visão</h1>
            <div className="w-16 h-0.5 bg-blue-500 mb-8"></div>
            <p className="text-xl text-white leading-relaxed max-w-xl">
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
                  A Safena nasceu em Florianópolis, SC. Com anos de trabalho e pesquisa no Laboratório de Otimização e Confiabilidade Estrutural (CORE) da Universidade Federal de Santa Catarina (UFSC), nossa equipe multidisciplinar é formada por profissionais de diferentes áreas da engenharia e tecnologia, com conhecimentos integrados em estruturas, sensores, ciência de dados e inovação.
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

      {/* Nossos Clientes */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-white mb-4">Nossos Clientes</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-16"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center space-x-12 lg:space-x-20">
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/b8a93f3f-2525-4563-96e1-766cdc8561ea.png"
                  alt="Minerva"
                  className="h-20 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/f10d599c-dcf1-4a4e-9803-727d736b4127.png"
                  alt="UFSC"
                  className="h-20 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/b00b9117-68a3-4507-9d1d-163b8339fc01.png"
                  alt="Kartado"
                  className="h-20 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/21b38f69-e678-4ff8-8af6-2b991e37ecbd.png"
                  alt="CORE"
                  className="h-20 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
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
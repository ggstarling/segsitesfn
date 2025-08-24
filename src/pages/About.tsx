import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Nossa Visão */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1651356945969-46c91f5d6317?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
        <div className="w-full text-center">
          <h2 className="text-4xl text-gray-900 mb-4">Nossos Parceiros</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-16"></div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite space-x-24 items-center">
              {[
                { name: "Minerva", logo: "/lovable-uploads/b8a93f3f-2525-4563-96e1-766cdc8561ea.png" },
                { name: "UFSC", logo: "/lovable-uploads/f10d599c-dcf1-4a4e-9803-727d736b4127.png" },
                { name: "Kartado", logo: "/lovable-uploads/b00b9117-68a3-4507-9d1d-163b8339fc01.png" },
                { name: "CORE", logo: "/lovable-uploads/21b38f69-e678-4ff8-8af6-2b991e37ecbd.png" },
                { name: "Fundo Catarina", logo: "/lovable-uploads/1eabf468-764a-4795-817b-7a33d35943f9.png" },
                { name: "Minerva", logo: "/lovable-uploads/b8a93f3f-2525-4563-96e1-766cdc8561ea.png" },
                { name: "UFSC", logo: "/lovable-uploads/f10d599c-dcf1-4a4e-9803-727d736b4127.png" },
                { name: "Kartado", logo: "/lovable-uploads/b00b9117-68a3-4507-9d1d-163b8339fc01.png" },
                { name: "CORE", logo: "/lovable-uploads/21b38f69-e678-4ff8-8af6-2b991e37ecbd.png" },
                { name: "Fundo Catarina", logo: "/lovable-uploads/1eabf468-764a-4795-817b-7a33d35943f9.png" },
                { name: "Minerva", logo: "/lovable-uploads/b8a93f3f-2525-4563-96e1-766cdc8561ea.png" },
                { name: "UFSC", logo: "/lovable-uploads/f10d599c-dcf1-4a4e-9803-727d736b4127.png" },
                { name: "Kartado", logo: "/lovable-uploads/b00b9117-68a3-4507-9d1d-163b8339fc01.png" },
                { name: "CORE", logo: "/lovable-uploads/21b38f69-e678-4ff8-8af6-2b991e37ecbd.png" },
                { name: "Fundo Catarina", logo: "/lovable-uploads/1eabf468-764a-4795-817b-7a33d35943f9.png" }
              ].map((client, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-48 w-auto max-w-[400px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
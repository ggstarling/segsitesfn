import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, BarChart3, Wrench } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: "data-collection",
      title: "Monitoramento Estrutural",
      description: "Oferecemos soluções personalizadas de monitoramento estrutural contínuo.",
      detailedContent: (
        <div className="space-y-4">
          <p>Oferecemos soluções personalizadas de monitoramento estrutural contínuo que acompanham o comportamento da estrutura ao longo do tempo.</p>
          <p>Por meio de tecnologias avançadas de sensoriamento e aprendizado de máquina, nossa plataforma oferece relatórios automáticos, emite alertas inteligentes e prevê comportamentos atípicos da estrutura, gerando diagnósticos precisos e embasados em dados reais.</p>
        </div>
      )
    },
    {
      id: "diagnostics",
      title: "B-WIM",
      description: "Implementamos sistemas de B-WIM para monitoramento inteligente do tráfego sobre pontes e viadutos.",
      detailedContent: (
        <div className="space-y-4">
          <p>Implementamos sistemas de B-WIM (Bridge Weigh-In-Motion) para monitoramento inteligente do tráfego sobre pontes e viadutos. Essa tecnologia permite identificar e pesar veículos em movimento, sem a necessidade de intervenção no tráfego.</p>
          <p>Através de sensores e algoritmos avançados, fornecemos informações detalhadas sobre cargas aplicadas, fluxo de veículos e padrões de uso da estrutura.</p>
        </div>
      )
    },
    {
      id: "dashboards",
      title: "Modelos de Desempenho",
      description: "Desenvolvemos modelos de desempenho que acompanham a evolução das condições dos ativos e estimam seu ciclo de vida.",
      detailedContent: (
        <div className="space-y-4">
          <p>Desenvolvemos modelos de desempenho que acompanham a evolução das condições dos ativos e estimam seu ciclo de vida com uso de inteligência artificial.</p>
          <p>Com base em dados históricos, inspeções e análises preditivas, nossa metodologia apoia a gestão eficiente de ativos de infraestrutura, oferecendo previsões sobre degradação, custos futuros e momento ideal para intervenção.</p>
        </div>
      )
    }
  ];

  // Auto-selection when section comes into view (both mobile and desktop)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setSelectedService("data-collection");
              setHasAnimated(true);
            }, 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);


  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section ref={sectionRef} id="services" className="py-8 md:py-16 bg-gradient-to-r md:bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-8 md:mb-12">Nossos Serviços</h2>

        {/* Desktop: Service Cards */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const icons = [Building2, BarChart3, Wrench];
            const IconComponent = icons[index];
            const isSelected = selectedService === service.id;

            return (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? "ring-2 ring-primary shadow-lg scale-105 bg-card" 
                    : "opacity-60 hover:opacity-80 bg-card/80"
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 flex items-center justify-center transition-colors ${
                      isSelected ? "text-primary" : "text-muted-foreground"
                    }`}>
                        {index === 0 ? (
                          // Signal outlined silhouette for Monitoramento Estrutural
                           <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(90)">
                            <circle cx="24" cy="24" r="2"/>
                            <path d="M16 16c4.4-4.4 11.6-4.4 16 0"/>
                            <path d="M32 32c-4.4 4.4-11.6 4.4-16 0"/>
                            <path d="M12 12c6.6-6.6 17.4-6.6 24 0"/>
                            <path d="M36 36c-6.6 6.6-17.4 6.6-24 0"/>
                          </svg>
                        ) : index === 1 ? (
                          // Weight in motion outlined silhouette for B-WIM - three arrows above platform
                          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                            {/* Three downward arrows - longer with sharper tips */}
                            <path d="M16 10v16m0 0l-2-4m2 4l2-4"/>
                            <path d="M24 8v18m0 0l-2-4m2 4l2-4"/>
                            <path d="M32 10v16m0 0l-2-4m2 4l2-4"/>
                            {/* Platform/base line */}
                            <line x1="10" y1="32" x2="38" y2="32"/>
                            <line x1="12" y1="36" x2="36" y2="36"/>
                          </svg>
                      ) : (
                        // Lightbulb outlined silhouette for Modelos de Desempenho
                        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M24 8c-5.5 0-10 4.5-10 10 0 3 1.3 5.7 3.5 7.5L19 30h10l1.5-4.5c2.2-1.8 3.5-4.5 3.5-7.5 0-5.5-4.5-10-10-10z"/>
                          <path d="M20 32h8"/>
                          <path d="M21 36h6"/>
                          <path d="M22 40h4"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <CardTitle className={`text-center text-lg transition-colors ${
                    isSelected ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Desktop: Content Area */}
        <div className={`hidden md:block bg-card rounded-lg p-8 shadow-sm border transition-all duration-500 ease-in-out ${
          selectedServiceData ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-4 scale-95'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {selectedServiceData?.title}
          </h3>
          <div className="text-muted-foreground leading-relaxed">
            {selectedServiceData?.detailedContent}
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => {
            const isSelected = selectedService === service.id;

            return (
              <div key={service.id} className="space-y-4">
                <Card
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? "ring-2 ring-primary shadow-lg bg-card" 
                      : "opacity-60 hover:opacity-80 bg-card/80"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 flex items-center justify-center transition-colors ${
                        isSelected ? "text-primary" : "text-muted-foreground"
                      }`}>
                          {index === 0 ? (
                            // Signal outlined silhouette for Monitoramento Estrutural
                            <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(90)">
                              <circle cx="24" cy="24" r="2"/>
                              <path d="M16 16c4.4-4.4 11.6-4.4 16 0"/>
                              <path d="M32 32c-4.4 4.4-11.6 4.4-16 0"/>
                              <path d="M12 12c6.6-6.6 17.4-6.6 24 0"/>
                              <path d="M36 36c-6.6 6.6-17.4 6.6-24 0"/>
                            </svg>
                          ) : index === 1 ? (
                            // Weight in motion outlined silhouette for B-WIM - three arrows above platform
                            <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                              {/* Three downward arrows - longer with sharper tips */}
                              <path d="M16 10v16m0 0l-2-4m2 4l2-4"/>
                              <path d="M24 8v18m0 0l-2-4m2 4l2-4"/>
                              <path d="M32 10v16m0 0l-2-4m2 4l2-4"/>
                              {/* Platform/base line */}
                              <line x1="10" y1="32" x2="38" y2="32"/>
                              <line x1="12" y1="36" x2="36" y2="36"/>
                            </svg>
                        ) : (
                          // Lightbulb outlined silhouette for Modelos de Desempenho
                          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M24 8c-5.5 0-10 4.5-10 10 0 3 1.3 5.7 3.5 7.5L19 30h10l1.5-4.5c2.2-1.8 3.5-4.5 3.5-7.5 0-5.5-4.5-10-10-10z"/>
                            <path d="M20 32h8"/>
                            <path d="M21 36h6"/>
                            <path d="M22 40h4"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <CardTitle className={`text-center text-lg transition-colors ${
                      isSelected ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                </Card>

                {/* Mobile: Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isSelected 
                    ? "max-h-96 opacity-100 transform translate-y-0 scale-100" 
                    : "max-h-0 opacity-0 transform -translate-y-4 scale-95"
                }`}>
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <div className="text-muted-foreground leading-relaxed">
                      {service.detailedContent}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
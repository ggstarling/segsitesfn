import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, BarChart3, Wrench } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string>("data-collection");

  const services = [
    {
      id: "data-collection",
      title: "Monitoramento Estrutural",
      description: "Oferecemos soluções personalizadas de monitoramento estrutural contínuo.",
      detailedContent: "Oferecemos soluções personalizadas de monitoramento estrutural contínuo que acompanham o comportamento da estrutura ao longo do tempo. Por meio de tecnologias avançadas de sensoriamento e aprendizado de máquina, nossa plataforma oferece relatórios automáticos, emite alertas inteligentes e prevê comportamentos atípicos da estrutura, gerando diagnósticos precisos e embasados em dados reais."
    },
    {
      id: "diagnostics",
      title: "B-WIM",
      description: "Implementamos sistemas de B-WIM para monitoramento inteligente do tráfego sobre pontes e viadutos.",
      detailedContent: "Implementamos sistemas de B-WIM (Bridge Weigh-In-Motion) para monitoramento inteligente do tráfego sobre pontes e viadutos. Essa tecnologia permite identificar e pesar veículos em movimento, sem a necessidade de intervenção no tráfego. Através de sensores e algoritmos avançados, fornecemos informações detalhadas sobre cargas aplicadas, fluxo de veículos e padrões de uso da estrutura, apoiando decisões estratégicas de manutenção, operação e segurança."
    },
    {
      id: "dashboards",
      title: "Modelos de Desempenho",
      description: "Desenvolvemos modelos de desempenho que acompanham a evolução das condições dos ativos e estimam seu ciclo de vida.",
      detailedContent: "Desenvolvemos modelos de desempenho que acompanham a evolução das condições dos ativos e estimam seu ciclo de vida. Com base em dados históricos, inspeções e análises preditivas, nossa metodologia apoia a gestão eficiente de ativos de infraestrutura, oferecendo previsões sobre degradação, custos futuros e momento ideal para intervenção."
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section id="services" className="py-12 sm:py-16 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl text-center mb-8 sm:mb-12">Nossos Serviços</h2>

        {/* Service Cards - Stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
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
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-colors ${
                      isSelected ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {index === 0 ? (
                        // Bridge outlined silhouette for Monitoramento Estrutural
                        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 30h36"/>
                          <path d="M9 30V18"/>
                          <path d="M24 30V14"/>
                          <path d="M39 30V18"/>
                          <path d="M9 18L24 14L39 18"/>
                        </svg>
                      ) : index === 1 ? (
                        // Truck outlined silhouette for B-WIM
                        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="8" y="20" width="16" height="8"/>
                          <rect x="24" y="24" width="8" height="8"/>
                          <path d="M32 26h4v6h-4V26z"/>
                          <circle cx="14" cy="34" r="3"/>
                          <circle cx="28" cy="34" r="3"/>
                          <path d="M8 28H6v4h2"/>
                          <path d="M32 28h4v4h-4"/>
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
                  <CardTitle className={`text-center text-base sm:text-lg transition-colors ${
                    isSelected ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
            {selectedServiceData?.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {selectedServiceData?.detailedContent}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
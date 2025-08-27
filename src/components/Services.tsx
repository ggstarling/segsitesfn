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
    <section id="services" className="py-16 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-12">Nossos Serviços</h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                    <div className={`w-12 h-12 flex items-center justify-center transition-colors ${
                      isSelected ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {index === 0 ? (
                        // Bridge silhouette for Monitoramento Estrutural
                        <svg viewBox="0 0 48 48" className="w-full h-full" fill="currentColor">
                          <path d="M6 30h36v2H6z"/>
                          <path d="M8 30h2V18h-2z"/>
                          <path d="M22 30h4V14h-4z"/>
                          <path d="M38 30h2V18h-2z"/>
                          <path d="M10 18l14-4 14 4v2l-14-4-14 4z"/>
                        </svg>
                      ) : index === 1 ? (
                        // Truck silhouette for B-WIM
                        <svg viewBox="0 0 48 48" className="w-full h-full" fill="currentColor">
                          <path d="M8 28h24v4H8z"/>
                          <path d="M8 20h16v8H8z"/>
                          <path d="M24 24h8v8h-8z"/>
                          <path d="M32 26h4v6h-4z"/>
                          <circle cx="14" cy="34" r="3"/>
                          <circle cx="28" cy="34" r="3"/>
                          <path d="M6 28h2v4H6z"/>
                          <path d="M36 28h2v4h-2z"/>
                        </svg>
                      ) : (
                        // Lightbulb silhouette for Modelos de Desempenho
                        <svg viewBox="0 0 48 48" className="w-full h-full" fill="currentColor">
                          <path d="M24 8c-5.5 0-10 4.5-10 10 0 3 1.3 5.7 3.5 7.5L19 30h10l1.5-4.5c2.2-1.8 3.5-4.5 3.5-7.5 0-5.5-4.5-10-10-10z"/>
                          <path d="M20 32h8v2h-8z"/>
                          <path d="M21 36h6v2h-6z"/>
                          <path d="M22 40h4v2h-4z"/>
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

        {/* Content Area */}
        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {selectedServiceData?.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {selectedServiceData?.detailedContent}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
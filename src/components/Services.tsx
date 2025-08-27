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
                    <IconComponent className={`w-12 h-12 transition-colors ${
                      isSelected ? "text-primary" : "text-muted-foreground"
                    }`} />
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
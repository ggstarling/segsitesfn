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
      detailedContent: "Nossos sistemas de monitoramento estrutural contínuo utilizam sensores avançados para acompanhar o comportamento da estrutura em tempo real. Coletamos dados sobre deformações, vibrações, temperatura e outros parâmetros críticos, fornecendo insights valiosos sobre a integridade e performance da infraestrutura. Nossa abordagem personalizada garante que cada solução seja adaptada às necessidades específicas do projeto, permitindo detecção precoce de anomalias e otimização da manutenção preventiva."
    },
    {
      id: "diagnostics",
      title: "B-WIM",
      description: "Implementamos sistemas de B-WIM para monitoramento inteligente do tráfego sobre pontes e viadutos.",
      detailedContent: "Nosso sistema B-WIM (Bridge Weigh-in-Motion) representa a tecnologia mais avançada para monitoramento do tráfego em pontes e viadutos. Através de sensores estrategicamente posicionados, capturamos dados precisos sobre peso, velocidade e características dos veículos que transitam pela estrutura. Esta tecnologia permite análise em tempo real do impacto do tráfego na infraestrutura, identificação de sobrecarga e otimização da gestão de tráfego, contribuindo significativamente para a preservação e segurança das pontes."
    },
    {
      id: "dashboards",
      title: "Modelos de Desempenho",
      description: "Desenvolvemos modelos de desempenho que acompanham a evolução das condições dos ativos e estimam seu ciclo de vida.",
      detailedContent: "Desenvolvemos modelos sofisticados de desempenho que integram dados históricos e em tempo real para prever a evolução das condições dos ativos de infraestrutura. Nossos algoritmos avançados analisam padrões de degradação, fatores ambientais e cargas operacionais para estimar com precisão o ciclo de vida útil das estruturas. Estes modelos fornecem informações cruciais para planejamento de manutenção, alocação de recursos e tomada de decisões estratégicas, maximizando o retorno sobre investimento em infraestrutura."
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-12">Serviços</h2>

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
                <CardContent>
                  <p className={`text-center transition-colors ${
                    isSelected ? "text-muted-foreground" : "text-muted-foreground/70"
                  }`}>
                    {service.description}
                  </p>
                </CardContent>
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
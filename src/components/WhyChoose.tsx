import { useState } from "react";
import { Check } from "lucide-react";

const WhyChoose = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    {
      title: "Tecnologia Avançada em Monitoramento",
      description: "Utilizamos sensores de última geração e algoritmos inteligentes para detectar problemas estruturais antes que se tornem críticos, garantindo máxima segurança e eficiência."
    },
    {
      title: "Análise Precisa e Confiável",
      description: "Nossa plataforma oferece análises detalhadas e relatórios precisos, permitindo decisões informadas baseadas em dados reais de performance estrutural."
    },
    {
      title: "Solução Intuitiva e Prática",
      description: "Interface desenvolvida para ser facilmente utilizada por engenheiros e técnicos, com visualizações claras e dashboards intuitivos para monitoramento em tempo real."
    },
    {
      title: "Suporte Técnico Especializado",
      description: "Nossa equipe de engenheiros especializados oferece suporte completo em todas as etapas do projeto, desde a instalação até a interpretação dos dados."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-12">Por que escolher a Safena?</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="space-y-3">
                <div 
                  className="flex items-center space-x-3 cursor-pointer group"
                  onClick={() => setSelectedItem(index)}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    selectedItem === index 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-300 text-gray-500'
                  }`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className={`text-lg font-medium transition-colors duration-300 ${
                    selectedItem === index 
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                  }`}>
                    {item.title}
                  </h3>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  selectedItem === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-9 pr-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary">
                  Monitoramento Inteligente
                </h4>
                <p className="text-muted-foreground max-w-xs">
                  Soluções avançadas para estruturas mais seguras
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
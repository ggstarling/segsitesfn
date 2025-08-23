import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const WhyChoose = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const items = [
    {
      title: "Obtenha dashboards automatizados",
      description: "Utilizamos sensores de última geração e algoritmos inteligentes para detectar problemas estruturais antes que se tornem críticos, garantindo máxima segurança e eficiência."
    },
    {
      title: "Diagnóstico estrutural baseado em dados",
      description: "Nossa plataforma oferece análises detalhadas e relatórios precisos, permitindo decisões informadas baseadas em dados reais de performance estrutural."
    },
    {
      title: "Análises preditivas, e não reativas",
      description: "Interface desenvolvida para ser facilmente utilizada por engenheiros e técnicos, com visualizações claras e dashboards intuitivos para monitoramento em tempo real."
    },
    {
      title: "Abordagem sem interrupções de tráfego",
      description: "Nossa equipe de engenheiros especializados oferece suporte completo em todas as etapas do projeto, desde a instalação até a interpretação dos dados."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setSelectedItem(0);
              setHasAnimated(true);
            }, 750);
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

  return (
    <section ref={sectionRef} className="pt-16 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4">        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 min-h-[600px]">
            <h2 className="text-3xl font-normal text-foreground mb-12">Por que escolher a Safena?</h2>
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
                
                <div className={`overflow-hidden transition-all duration-700 ease-out ${
                  selectedItem === index 
                    ? 'max-h-32 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}>
                  <div className="pl-9 pr-4 pt-2 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
              {selectedItem === 0 && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/20 rounded-lg p-3 animate-pulse">
                      <div className="h-3 bg-primary/40 rounded mb-2"></div>
                      <div className="h-8 bg-primary rounded"></div>
                    </div>
                    <div className="bg-primary/20 rounded-lg p-3 animate-pulse" style={{animationDelay: '0.5s'}}>
                      <div className="h-3 bg-primary/40 rounded mb-2"></div>
                      <div className="h-8 bg-primary rounded"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    Dashboards Automatizados
                  </h4>
                </div>
              )}
              
              {selectedItem === 1 && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-primary/30 rounded-full animate-spin mx-auto mb-4"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-2 h-8 bg-primary/60 rounded animate-pulse"></div>
                    <div className="w-2 h-12 bg-primary/80 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-6 bg-primary/60 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <div className="w-2 h-10 bg-primary rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    Diagnóstico Baseado em Dados
                  </h4>
                </div>
              )}
              
              {selectedItem === 2 && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path 
                        d="M10,80 Q30,20 50,40 T90,10" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth="3" 
                        fill="none"
                        className="animate-pulse"
                        strokeDasharray="5,5"
                      />
                      <path 
                        d="M10,80 Q30,30 50,50 T90,20" 
                        stroke="hsl(var(--primary)/0.6)" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="3,3"
                        style={{animationDelay: '0.5s'}}
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    Análises Preditivas
                  </h4>
                </div>
              )}
              
              {selectedItem === 3 && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="relative mb-6">
                    <div className="flex justify-center space-x-1 mb-4">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
                    </div>
                    <div className="w-16 h-8 border-2 border-primary/40 rounded-lg mx-auto relative">
                      <div className="absolute inset-1 bg-primary/20 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    Sem Interrupções
                  </h4>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
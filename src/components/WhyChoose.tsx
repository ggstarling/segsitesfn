import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const WhyChoose = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const items = [
    {
      title: "Dashboards automáticos e intuitivos",
      description: "Visualize informações claras e atualizadas em tempo real, apoiando decisões rápidas e assertivas."
    },
    {
      title: "Diagnósticos estruturais confiáveis",
      description: "Conte com relatórios baseados em dados reais, com análises precisas e tecnicamente embasadas."
    },
    {
      title: "Análise preditiva, não reativa",
      description: "Antecipe falhas antes que elas ocorram e reduza custos com uma gestão orientada por previsões."
    },
    {
      title: "Monitoramento sem interrupções do tráfego",
      description: "Garanta o monitoramento sem interrupções do tráfego com tecnologia não invasiva, mantendo o fluxo contínuo sem paradas ou bloqueios."
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
    <section ref={sectionRef} className="pt-16 pb-4 bg-background">
      <div className="max-w-7xl mx-auto px-4">        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 min-h-[500px] px-8 mt-6">
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
                  {/* Computer Screen Frame */}
                  <div className="relative mx-auto w-64 h-44 bg-gray-800 rounded-lg p-2 mb-4">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded border-2 border-gray-300 p-3 relative overflow-hidden">
                      {/* Header Bar */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="h-1 w-16 bg-gray-200 rounded"></div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="grid grid-cols-3 gap-2 h-full">
                        {/* Left Panel - Charts */}
                        <div className="col-span-2 space-y-2">
                          {/* Chart 1 */}
                          <div className="h-12 bg-primary/10 rounded p-1 relative">
                            <div className="flex items-end justify-between h-full px-1">
                              <div className="w-1 bg-primary/60 animate-pulse" style={{height: '60%'}}></div>
                              <div className="w-1 bg-primary/80 animate-pulse" style={{height: '80%', animationDelay: '0.2s'}}></div>
                              <div className="w-1 bg-primary animate-pulse" style={{height: '100%', animationDelay: '0.4s'}}></div>
                              <div className="w-1 bg-primary/70 animate-pulse" style={{height: '70%', animationDelay: '0.6s'}}></div>
                              <div className="w-1 bg-primary/90 animate-pulse" style={{height: '90%', animationDelay: '0.8s'}}></div>
                            </div>
                          </div>
                          
                          {/* Chart 2 - Line Chart */}
                          <div className="h-12 bg-primary/5 rounded p-1 relative">
                            <svg className="w-full h-full" viewBox="0 0 100 40">
                              <path 
                                d="M5,30 Q20,15 35,20 T65,10 T95,25" 
                                stroke="hsl(var(--primary))" 
                                strokeWidth="1.5" 
                                fill="none"
                                className="animate-pulse"
                                strokeDasharray="2,2"
                              />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Right Panel - Widgets */}
                        <div className="space-y-2">
                          {/* Widget 1 */}
                          <div className="h-8 bg-primary/15 rounded p-1">
                            <div className="w-full h-2 bg-primary/30 rounded mb-1"></div>
                            <div className="w-3/4 h-1 bg-primary/50 rounded animate-pulse"></div>
                          </div>
                          
                          {/* Widget 2 */}
                          <div className="h-8 bg-primary/10 rounded p-1">
                            <div className="flex justify-center items-center h-full">
                              <div className="w-5 h-5 border-2 border-primary/40 rounded-full relative">
                                <div className="absolute inset-1 bg-primary/60 rounded-full animate-ping"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Widget 3 */}
                          <div className="h-6 bg-primary/8 rounded p-1">
                            <div className="grid grid-cols-3 gap-1 h-full">
                              <div className="bg-primary/40 rounded animate-pulse"></div>
                              <div className="bg-primary/60 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                              <div className="bg-primary/50 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Screen Stand */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded-b"></div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded"></div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary">
                    Dashboards Automatizados
                  </h4>
                </div>
              )}
              
              {selectedItem === 1 && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="relative w-32 h-20 mx-auto mb-6">
                    {/* Bridge Structure */}
                    <svg className="w-full h-full" viewBox="0 0 120 80">
                      {/* Bridge Outline */}
                      <path 
                        d="M10,60 L20,35 L35,35 L45,25 L75,25 L85,35 L100,35 L110,60"
                        stroke="hsl(var(--primary)/0.3)" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      {/* Bridge Deck */}
                      <line 
                        x1="20" y1="35" x2="100" y2="35" 
                        stroke="hsl(var(--primary)/0.4)" 
                        strokeWidth="3"
                      />
                      {/* Suspension Cables */}
                      <line x1="45" y1="25" x2="45" y2="35" stroke="hsl(var(--primary)/0.3)" strokeWidth="1"/>
                      <line x1="75" y1="25" x2="75" y2="35" stroke="hsl(var(--primary)/0.3)" strokeWidth="1"/>
                      
                      {/* X-ray Scanning Beam */}
                      <defs>
                        <linearGradient id="xrayBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary)/0)" />
                          <stop offset="40%" stopColor="hsl(var(--primary)/0.6)" />
                          <stop offset="60%" stopColor="hsl(var(--primary)/0.8)" />
                          <stop offset="100%" stopColor="hsl(var(--primary)/0)" />
                        </linearGradient>
                        <animateTransform
                          attributeName="gradientTransform"
                          type="translate"
                          values="-120 0; 240 0; -120 0"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </defs>
                      
                      {/* Scanning Light Effect */}
                      <rect 
                        x="0" y="0" width="120" height="80" 
                        fill="url(#xrayBeam)"
                        opacity="0.4"
                      />
                      
                      {/* Revealed Structure Details (appear gradually) */}
                      <g className="animate-pulse" style={{animationDelay: '1s'}}>
                        <circle cx="30" cy="35" r="1.5" fill="hsl(var(--primary)/0.6)"/>
                        <circle cx="50" cy="30" r="1" fill="hsl(var(--primary)/0.5)"/>
                        <circle cx="70" cy="30" r="1" fill="hsl(var(--primary)/0.5)"/>
                        <circle cx="90" cy="35" r="1.5" fill="hsl(var(--primary)/0.6)"/>
                      </g>
                      
                      {/* Grid Pattern (X-ray effect) */}
                      <defs>
                        <pattern id="xrayGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="hsl(var(--primary)/0.1)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect x="20" y="25" width="80" height="35" fill="url(#xrayGrid)" opacity="0.6"/>
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary">
                    Diagnósticos Estruturais
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
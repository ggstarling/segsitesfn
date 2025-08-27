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
                  {/* Notebook/Laptop Frame */}
                  <div className="relative mx-auto w-72 h-48 mb-4">
                    {/* Laptop Base */}
                    <div className="absolute bottom-0 w-full h-4 rounded-lg" style={{backgroundColor: '#3481bd'}}></div>
                    
                    {/* Laptop Screen */}
                    <div className="relative w-full h-44 rounded-t-lg border-4 overflow-hidden" style={{borderColor: '#3481bd', backgroundColor: '#3481bd'}}>
                      {/* Screen Content */}
                      <div className="w-full h-full bg-white m-1 rounded-t p-3 relative overflow-hidden">
                        {/* Browser Header */}
                        <div className="flex items-center space-x-1 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#3481bd', opacity: 0.3}}></div>
                          <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#3481bd', opacity: 0.5}}></div>
                          <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#3481bd', opacity: 0.7}}></div>
                          <div className="ml-4 h-1 w-20 rounded" style={{backgroundColor: '#3481bd', opacity: 0.2}}></div>
                        </div>
                        
                        {/* Dashboard Content */}
                        <div className="grid grid-cols-3 gap-2 h-full">
                          {/* Main Chart Area */}
                          <div className="col-span-2 space-y-2">
                            {/* Bar Chart */}
                            <div className="h-14 rounded p-1 relative" style={{backgroundColor: '#3481bd', opacity: 0.1}}>
                              <div className="flex items-end justify-between h-full px-1">
                                <div className="w-1.5 animate-pulse rounded-t" style={{height: '50%', backgroundColor: '#3481bd', opacity: 0.6}}></div>
                                <div className="w-1.5 animate-pulse rounded-t" style={{height: '80%', backgroundColor: '#3481bd', opacity: 0.8, animationDelay: '0.2s'}}></div>
                                <div className="w-1.5 animate-pulse rounded-t" style={{height: '100%', backgroundColor: '#3481bd', animationDelay: '0.4s'}}></div>
                                <div className="w-1.5 animate-pulse rounded-t" style={{height: '65%', backgroundColor: '#3481bd', opacity: 0.7, animationDelay: '0.6s'}}></div>
                                <div className="w-1.5 animate-pulse rounded-t" style={{height: '90%', backgroundColor: '#3481bd', opacity: 0.9, animationDelay: '0.8s'}}></div>
                              </div>
                            </div>
                            
                            {/* Line Chart */}
                            <div className="h-12 rounded p-1 relative" style={{backgroundColor: '#3481bd', opacity: 0.05}}>
                              <svg className="w-full h-full" viewBox="0 0 100 40">
                                <path 
                                  d="M5,30 Q20,12 35,18 T65,8 T95,22" 
                                  stroke="#3481bd" 
                                  strokeWidth="2" 
                                  fill="none"
                                  className="animate-pulse"
                                  strokeDasharray="3,2"
                                  opacity="0.8"
                                />
                                <path 
                                  d="M5,25 Q20,8 35,15 T65,5 T95,18" 
                                  stroke="#3481bd" 
                                  strokeWidth="1.5" 
                                  fill="none"
                                  className="animate-pulse"
                                  strokeDasharray="2,1"
                                  opacity="0.6"
                                  style={{animationDelay: '0.5s'}}
                                />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Side Widgets */}
                          <div className="space-y-2">
                            {/* Metric Widget */}
                            <div className="h-10 rounded p-1" style={{backgroundColor: '#3481bd', opacity: 0.1}}>
                              <div className="w-full h-2 rounded mb-1" style={{backgroundColor: '#3481bd', opacity: 0.3}}></div>
                              <div className="w-3/4 h-1 rounded animate-pulse" style={{backgroundColor: '#3481bd', opacity: 0.5}}></div>
                            </div>
                            
                            {/* Status Indicator */}
                            <div className="h-8 rounded p-1" style={{backgroundColor: '#3481bd', opacity: 0.08}}>
                              <div className="flex justify-center items-center h-full">
                                <div className="w-4 h-4 border-2 rounded-full relative" style={{borderColor: '#3481bd', opacity: 0.4}}>
                                  <div className="absolute inset-1 rounded-full animate-ping" style={{backgroundColor: '#3481bd', opacity: 0.6}}></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Mini Grid */}
                            <div className="h-6 rounded p-1" style={{backgroundColor: '#3481bd', opacity: 0.06}}>
                              <div className="grid grid-cols-3 gap-1 h-full">
                                <div className="rounded animate-pulse" style={{backgroundColor: '#3481bd', opacity: 0.4}}></div>
                                <div className="rounded animate-pulse" style={{backgroundColor: '#3481bd', opacity: 0.6, animationDelay: '0.3s'}}></div>
                                <div className="rounded animate-pulse" style={{backgroundColor: '#3481bd', opacity: 0.5, animationDelay: '0.6s'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Laptop Hinge */}
                    <div className="absolute bottom-3 w-full h-1 rounded" style={{backgroundColor: '#3481bd', opacity: 0.3}}></div>
                    
                    {/* Trackpad */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded" style={{backgroundColor: '#3481bd', opacity: 0.2}}></div>
                  </div>
                </div>
              )}
              
              {selectedItem === 1 && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="relative w-64 h-40 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
                      {/* Background grid that moves */}
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3481bd" strokeWidth="0.5" opacity="0.2"/>
                        </pattern>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3481bd" stopOpacity="0"/>
                          <stop offset="50%" stopColor="#3481bd" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#3481bd" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Animated grid background */}
                      <rect width="200" height="120" fill="url(#grid)" className="animate-pulse" style={{animationDuration: '3s'}}/>
                      
                      {/* Central geometric structure */}
                      <g transform="translate(100, 60)">
                        {/* Main structure - abstract engineering shape */}
                        <polygon 
                          points="-30,-20 30,-20 40,0 30,20 -30,20 -40,0" 
                          fill="none" 
                          stroke="#3481bd" 
                          strokeWidth="2" 
                          opacity="0.7"
                          className="animate-pulse"
                          style={{animationDelay: '0s'}}
                        />
                        
                        {/* Dynamic measurement lines */}
                        <g className="animate-pulse" style={{animationDelay: '0.5s'}}>
                          <line x1="-35" y1="-25" x2="35" y2="-25" stroke="#3481bd" strokeWidth="1" opacity="0.6"/>
                          <line x1="-35" y1="-25" x2="-35" y2="-30" stroke="#3481bd" strokeWidth="1" opacity="0.6"/>
                          <line x1="35" y1="-25" x2="35" y2="-30" stroke="#3481bd" strokeWidth="1" opacity="0.6"/>
                          {/* Measurement arrows */}
                          <polygon points="-32,-27 -35,-25 -32,-23" fill="#3481bd" opacity="0.6"/>
                          <polygon points="32,-27 35,-25 32,-23" fill="#3481bd" opacity="0.6"/>
                        </g>
                        
                        {/* Vertical measurement */}
                        <g className="animate-pulse" style={{animationDelay: '1s'}}>
                          <line x1="-45" y1="-20" x2="-45" y2="20" stroke="#3481bd" strokeWidth="1" opacity="0.6"/>
                          <line x1="-45" y1="-20" x2="-50" y2="-20" stroke="#3481bd" strokeWidth="1" opacity="0.6"/>
                          <line x1="-45" y1="20" x2="-50" y2="20" stroke="#3481bd" strokeWidth="1" opacity="0.6"/>
                          {/* Vertical arrows */}
                          <polygon points="-47,-17 -45,-20 -43,-17" fill="#3481bd" opacity="0.6"/>
                          <polygon points="-47,17 -45,20 -43,17" fill="#3481bd" opacity="0.6"/>
                        </g>
                        
                        {/* Dynamic calculation points */}
                        <circle cx="-20" cy="-10" r="2" fill="#3481bd" opacity="0.8" className="animate-ping" style={{animationDelay: '0.2s'}}/>
                        <circle cx="20" cy="-10" r="2" fill="#3481bd" opacity="0.8" className="animate-ping" style={{animationDelay: '0.7s'}}/>
                        <circle cx="0" cy="10" r="2" fill="#3481bd" opacity="0.8" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                        
                        {/* Abstract equation symbols as geometric shapes */}
                        <g className="animate-pulse" style={{animationDelay: '1.5s'}}>
                          <rect x="-10" y="-5" width="20" height="2" fill="#3481bd" opacity="0.4"/>
                          <rect x="-1" y="-14" width="2" height="8" fill="#3481bd" opacity="0.4"/>
                        </g>
                        
                        {/* Moving analysis line */}
                        <line x1="-60" y1="0" x2="60" y2="0" stroke="url(#fadeGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                      </g>
                      
                      {/* Corner calculation indicators */}
                      <g className="animate-pulse" style={{animationDelay: '2s'}}>
                        <circle cx="20" cy="20" r="1.5" fill="#3481bd" opacity="0.5"/>
                        <circle cx="180" cy="20" r="1.5" fill="#3481bd" opacity="0.5"/>
                        <circle cx="20" cy="100" r="1.5" fill="#3481bd" opacity="0.5"/>
                        <circle cx="180" cy="100" r="1.5" fill="#3481bd" opacity="0.5"/>
                      </g>
                      
                      {/* Dynamic scanning effect */}
                      <rect x="0" y="0" width="200" height="3" fill="url(#fadeGradient)" opacity="0.6" className="animate-pulse" style={{animationDelay: '1.8s', animationDuration: '2s'}}/>
                    </svg>
                  </div>
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
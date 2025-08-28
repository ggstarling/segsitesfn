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
      description: "Garanta o monitoramento sem interrupções do tráfego, mantendo o fluxo contínuo: sem paradas ou bloqueios."
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
    <section ref={sectionRef} className="pt-8 md:pt-16 pb-4 bg-background">
      <div className="max-w-7xl mx-auto px-4">        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 min-h-[500px] px-4 md:px-8 mt-6">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-8 md:mb-12 relative -top-6">Por que escolher a Safena?</h2>
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
          
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
              {selectedItem === 0 && (
                <div className="text-center space-y-4 animate-fade-in">
                  {/* Modern Notebook */}
                  <div className="relative mx-auto w-60 h-40 mb-4">
                    {/* Notebook Body */}
                    <div className="w-full h-full rounded-xl relative shadow-lg" style={{backgroundColor: '#3481bd'}}>
                      {/* Screen Area */}
                      <div className="absolute inset-2 rounded-lg bg-black/80 p-2">
                          {/* Modern Dashboard Screen */}
                         <div className="w-full h-full rounded bg-black p-1.5 overflow-hidden">
                            {/* Dashboard with 3 Chart Blocks */}
                            <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                              
                              {/* Top Left - Animated Bar Chart Block */}
                              <div className="rounded p-1" style={{backgroundColor: 'rgba(55, 65, 81, 0.8)'}}>
                                <div className="h-full flex items-end justify-center space-x-0.5">
                                  <div 
                                    className="w-1 rounded-t transition-all duration-1000 ease-in-out" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      height: '60%', 
                                      animation: 'barPulse1 2s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="w-1 rounded-t transition-all duration-1200 ease-in-out" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      height: '40%', 
                                      animation: 'barPulse2 2.5s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="w-1 rounded-t transition-all duration-900 ease-in-out" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      height: '80%', 
                                      animation: 'barPulse3 1.8s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="w-1 rounded-t transition-all duration-1100 ease-in-out" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      height: '50%', 
                                      animation: 'barPulse4 2.2s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="w-1 rounded-t transition-all duration-1000 ease-in-out" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      height: '70%', 
                                      animation: 'barPulse5 1.9s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                </div>
                              </div>
                              
                              {/* Top Right - Flowing Line Chart Block */}
                              <div className="rounded p-1" style={{backgroundColor: 'rgba(30, 41, 59, 0.9)'}}>
                                <div className="h-full">
                                  <svg className="w-full h-full" viewBox="0 0 40 20">
                                    <defs>
                                      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3481bd" stopOpacity="0.3"/>
                                        <stop offset="50%" stopColor="#3481bd" stopOpacity="1"/>
                                        <stop offset="100%" stopColor="#3481bd" stopOpacity="0.3"/>
                                      </linearGradient>
                                    </defs>
                                    <path 
                                      d="M2,15 Q12,8 20,12 T38,6" 
                                      stroke="url(#lineGradient1)" 
                                      strokeWidth="1.5" 
                                      fill="none"
                                      style={{
                                        animation: 'lineWave1 3s ease-in-out infinite',
                                        strokeDasharray: '2,2',
                                        strokeDashoffset: '0'
                                      }}
                                    />
                                    <path 
                                      d="M2,12 Q12,5 20,9 T38,4" 
                                      stroke="#3481bd" 
                                      strokeWidth="1" 
                                      fill="none"
                                      opacity="0.7"
                                      style={{
                                        animation: 'lineWave2 4s ease-in-out infinite',
                                        strokeDasharray: '1,1',
                                        strokeDashoffset: '0'
                                      }}
                                    />
                                    {/* Animated data points */}
                                    <circle cx="8" cy="11" r="0.8" fill="#3481bd" opacity="0.8" style={{animation: 'pointPulse1 2s ease-in-out infinite'}}/>
                                    <circle cx="20" cy="12" r="0.8" fill="#3481bd" opacity="0.8" style={{animation: 'pointPulse2 2.5s ease-in-out infinite'}}/>
                                    <circle cx="32" cy="7" r="0.8" fill="#3481bd" opacity="0.8" style={{animation: 'pointPulse3 3s ease-in-out infinite'}}/>
                                  </svg>
                                </div>
                              </div>

                              {/* Bottom Left - Dynamic Circular Progress Block */}
                              <div className="rounded p-1 flex items-center justify-center" style={{backgroundColor: 'rgba(51, 65, 85, 0.7)'}}>
                                <div className="relative w-8 h-8">
                                  <div className="absolute inset-0 rounded-full border-2 border-gray-600"></div>
                                  <div 
                                    className="absolute inset-0 rounded-full border-2 border-transparent"
                                    style={{
                                      borderTopColor: '#3481bd', 
                                      borderRightColor: '#3481bd',
                                      animation: 'circularProgress 3s ease-in-out infinite',
                                      transformOrigin: 'center'
                                    }}
                                  ></div>
                                  <div className="absolute inset-1 rounded-full bg-black/20"></div>
                                  {/* Center indicator */}
                                  <div 
                                    className="absolute inset-3 rounded-full bg-primary/60"
                                    style={{animation: 'centerPulse 2s ease-in-out infinite'}}
                                  ></div>
                                </div>
                              </div>

                              {/* Bottom Right - Dynamic Data Matrix Block */}
                              <div className="rounded p-1" style={{backgroundColor: 'rgba(45, 55, 72, 0.8)'}}>
                                <div className="grid grid-cols-3 gap-0.5 h-full p-1.5">
                                  <div 
                                    className="rounded transition-all duration-500" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      animation: 'matrixPulse1 2s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="rounded transition-all duration-700" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      animation: 'matrixPulse2 2.5s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="rounded transition-all duration-600" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      animation: 'matrixPulse3 1.8s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="rounded transition-all duration-800" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      animation: 'matrixPulse4 2.2s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="rounded transition-all duration-500" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      animation: 'matrixPulse5 1.9s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                  <div 
                                    className="rounded transition-all duration-900" 
                                    style={{
                                      backgroundColor: '#3481bd', 
                                      animation: 'matrixPulse6 2.7s ease-in-out infinite alternate'
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                       </div>
                       
                       {/* Notebook Base - Thinner */}
                       <div 
                         className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1.5 rounded-b opacity-85"
                         style={{backgroundColor: '#3481bd'}}
                       ></div>
                       <div 
                         className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-28 h-0.5 rounded opacity-60"
                         style={{backgroundColor: '#3481bd'}}
                       ></div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedItem === 1 && (
                <div className="text-center space-y-4 animate-fade-in">
                  {/* Stylized Report Document */}
                  <div className="relative mx-auto w-64 h-40 mb-4 flex items-center justify-center">
                    {/* Document Container */}
                    <div className="w-52 h-36 relative">
                      {/* Main Document Body */}
                      <div className="w-full h-full rounded-lg relative shadow-lg" style={{backgroundColor: '#f8fafc', border: '2px solid #64748b'}}>
                        
                        {/* Document Header */}
                        <div className="absolute top-0 left-0 right-0 h-8 rounded-t-lg" style={{backgroundColor: '#64748b'}}>
                          {/* Header Icons */}
                          <div className="flex items-center justify-between h-full px-3">
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 rounded-full bg-white/60"></div>
                              <div className="w-1 h-1 rounded-full bg-white/60"></div>
                              <div className="w-1 h-1 rounded-full bg-white/60"></div>
                            </div>
                            <div className="w-16 h-2 rounded bg-white/20"></div>
                          </div>
                        </div>

                        {/* Document Content Area */}
                        <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
                          {/* Content Lines with Animation - moved down by 4% */}
                          <div className="space-y-2" style={{marginTop: '8%'}}>
                            <div 
                              className="h-1.5 rounded transition-all duration-1000"
                              style={{
                                backgroundColor: '#94a3b8',
                                width: '80%',
                                animation: 'barPulse1 2s ease-in-out infinite alternate'
                              }}
                            ></div>
                            <div 
                              className="h-1.5 rounded transition-all duration-1200"
                              style={{
                                backgroundColor: '#475569',
                                width: '95%',
                                animation: 'barPulse2 2.5s ease-in-out infinite alternate'
                              }}
                            ></div>
                            <div 
                              className="h-1.5 rounded transition-all duration-900"
                              style={{
                                backgroundColor: '#64748b',
                                width: '70%',
                                animation: 'barPulse3 1.8s ease-in-out infinite alternate'
                              }}
                            ></div>
                            <div 
                              className="h-1.5 rounded transition-all duration-1100"
                              style={{
                                backgroundColor: '#94a3b8',
                                width: '85%',
                                animation: 'barPulse4 2.2s ease-in-out infinite alternate'
                              }}
                            ></div>
                          </div>

                          {/* Graph removed - empty space */}

                          {/* Text Lines Below Chart */}
                          <div className="mt-3 space-y-1.5">
                            <div 
                              className="h-1 rounded transition-all duration-1000"
                              style={{
                                backgroundColor: '#3481bd',
                                width: '90%',
                                opacity: '0.6',
                                animation: 'matrixPulse1 2.3s ease-in-out infinite alternate'
                              }}
                            ></div>
                            <div 
                              className="h-1 rounded transition-all duration-1200"
                              style={{
                                backgroundColor: '#3481bd',
                                width: '75%',
                                opacity: '0.5',
                                animation: 'matrixPulse2 2.8s ease-in-out infinite alternate'
                              }}
                            ></div>
                            <div 
                              className="h-1 rounded transition-all duration-900"
                              style={{
                                backgroundColor: '#3481bd',
                                width: '85%',
                                opacity: '0.4',
                                animation: 'matrixPulse3 2.1s ease-in-out infinite alternate'
                              }}
                            ></div>
                            <div 
                              className="h-1 rounded transition-all duration-1100"
                              style={{
                                backgroundColor: '#3481bd',
                                width: '65%',
                                opacity: '0.5',
                                animation: 'matrixPulse4 2.6s ease-in-out infinite alternate'
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Checkmark Badge - Positioned beside document */}
                        <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: '#3481bd'}}>
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-white"
                            style={{
                              animation: 'pointPulse1 2s ease-in-out infinite'
                            }}
                          >
                            <Check className="w-5 h-5" style={{color: '#3481bd'}} />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedItem === 2 && (
                <div className="text-center space-y-4 animate-fade-in">
                  {/* Animated Predictive Eye with Bar Chart */}
                  <div className="relative mx-auto w-81 h-54 mb-4 flex items-center justify-center">
                    <div className="predictive-eye">
                      {/* Eye Outline */}
                      <div className="eye-shape md:scale-150">
                        {/* Eye Border */}
                        <div className="eye-border"></div>
                        
                        {/* Pupil Area */}
                        <div className="pupil-area">
                          {/* Animated Bar Chart Inside Pupil */}
                          <div className="chart-container">
                            <div className="chart-bar" style={{animationDelay: '0s'}}></div>
                            <div className="chart-bar" style={{animationDelay: '0.2s'}}></div>
                            <div className="chart-bar" style={{animationDelay: '0.4s'}}></div>
                            <div className="chart-bar" style={{animationDelay: '0.6s'}}></div>
                            <div className="chart-bar" style={{animationDelay: '0.8s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedItem === 3 && (
                <div className="text-center space-y-4 animate-fade-in">
                  {/* Refined Traffic Road */}
                  <div className="relative mx-auto w-80 h-52 mb-4 flex items-center justify-center">
                    <div className="traffic-road-refined">
                      {/* Tall Straight Road */}
                      <div className="road-straight">
                        {/* Left Lane */}
                        <div className="lane-straight left-lane-straight">
                          <div className="solid-arrow up-arrow-refined" style={{transform: 'scale(0.75)'}}></div>
                        </div>
                        
                        {/* Center Divider */}
                        <div className="center-divider-straight">
                          <div className="divider-dash"></div>
                          <div className="divider-dash"></div>
                          <div className="divider-dash"></div>
                          <div className="divider-dash"></div>
                          <div className="divider-dash"></div>
                          <div className="divider-dash"></div>
                        </div>
                        
                        {/* Right Lane */}
                        <div className="lane-straight right-lane-straight">
                          <div className="solid-arrow down-arrow-refined" style={{transform: 'scale(0.75)'}}></div>
                        </div>
                      </div>
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
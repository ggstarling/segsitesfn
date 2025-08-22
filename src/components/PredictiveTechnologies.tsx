const PredictiveTechnologies = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
          SOLUÇÕES EM
        </p>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Tecnologias preditivas no Brasil
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Na Safena, oferecemos soluções avançadas de monitoramento de condições e manutenção preditiva, 
          projetadas para maximizar a confiabilidade e reduzir custos operacionais.
        </p>
        
        <div className="relative h-32 overflow-hidden">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            {/* Orange wave */}
            <path
              d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M0,80 Q150,40 300,80 T600,80 T900,80 T1200,80"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            
            {/* Green wave */}
            <path
              d="M0,70 Q200,30 400,70 T800,70 T1200,70"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.25s' }}
            />
            <path
              d="M0,50 Q200,10 400,50 T800,50 T1200,50"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.75s' }}
            />
            <path
              d="M0,90 Q200,50 400,90 T800,90 T1200,90"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1.25s' }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PredictiveTechnologies;
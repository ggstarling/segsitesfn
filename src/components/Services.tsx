import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, BarChart3, Wrench } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "data-collection",
      title: "Monitoramento Estrutural",
      description: "Coletamos dados precisos de estruturas para monitoramento avançado."
    },
    {
      id: "diagnostics",
      title: "B-WIM",
      description: "Analisamos dados para identificar riscos e necessidades de manutenção."
    },
    {
      id: "dashboards",
      title: "Modelos de Desempenho",
      description: "Visualização intuitiva e interativa de informações estruturais em tempo real."
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-12">Serviços</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const icons = [Building2, BarChart3, Wrench];
            const IconComponent = icons[index];

            return (
              <Card
                key={service.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-16 h-16 text-primary" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {services.find(s => s.id === selectedService)?.title}
              </DialogTitle>
              <DialogDescription>
                {services.find(s => s.id === selectedService)?.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
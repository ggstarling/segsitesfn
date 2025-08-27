import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="pt-16 pb-8 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          <div className="px-8">
            <h3 className="text-3xl font-semibold text-foreground mb-8">Fale Conosco</h3>
            <p className="text-gray-600 leading-relaxed mb-4 mt-6">
              Para um contato personalizado, informe-nos seus dados:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="p-8 pt-4">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Nome"
                    maxLength={74}
                    required 
                    className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="E-mail"
                    maxLength={50}
                    required 
                    className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  
                  <Select>
                    <SelectTrigger className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900">
                      <SelectValue placeholder="Setor da Indústria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construção Civil</SelectItem>
                      <SelectItem value="infrastructure">Infraestrutura</SelectItem>
                      <SelectItem value="transport">Transporte</SelectItem>
                      <SelectItem value="energy">Energia</SelectItem>
                      <SelectItem value="data-science">Ciência de Dados</SelectItem>
                      <SelectItem value="environment">Meio Ambiente</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Textarea 
                    id="message" 
                    placeholder="Mensagem"
                    rows={4} 
                    className="p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  style={{ backgroundColor: '#3481bd' }}
                  className="w-full h-12 hover:opacity-90 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            {/* Brazil silhouette */}
            <div className="hidden lg:flex items-start justify-end pr-4 pl-12 -mt-20">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6e51012e-1cb4-4b89-88b6-2b16120e8f98.png"
                  alt="Brazil silhouette"
                  className="w-[454px] h-[454px] opacity-100"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(2200%) hue-rotate(210deg) brightness(95%) contrast(90%) drop-shadow(0 0 0 4px #3481bd)'
                  }}
                />
                {/* Pulsing dots positioned within Brazil silhouette */}
                <div className="absolute top-[12%] left-[50%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.2s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[18%] left-[64%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.6s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[28%] left-[74%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.8s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[35%] left-[54%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.2s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[35%] left-[94%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.0s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[45%] left-[68%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.4s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[52%] left-[78%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[58%] left-[60%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.0s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[65%] left-[71%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.4s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[72%] left-[64%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.6s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-[82%] left-[60%] w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.3s', animationDuration: '4.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
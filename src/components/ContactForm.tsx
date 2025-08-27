import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          <div className="px-8">
            <h3 className="text-3xl font-normal text-foreground mb-6">Fale Conosco</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Para um contato personalizado, informe-nos seus dados:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="p-8">
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
                    <SelectTrigger className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
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
            <div className="hidden lg:flex items-center justify-center p-8">
              <img 
                src="/lovable-uploads/442e7f39-03b8-4a7b-8989-e8cc94dbf801.png"
                alt="Brazil silhouette"
                className="w-80 h-80 opacity-80"
                style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
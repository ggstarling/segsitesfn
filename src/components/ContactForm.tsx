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
          <div>
            <h3 className="text-3xl font-normal text-foreground mb-6">Entre em contato</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Informe seu nome e e-mail e nossa equipe preparará um contato personalizado para você.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <Label htmlFor="name" className="text-gray-700 font-medium">Nome</Label>
                     <Input 
                      id="name" 
                      type="text" 
                      maxLength={74}
                      required 
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:rounded-md transition-all duration-200 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="email" className="text-gray-700 font-medium">E-mail</Label>
                     <Input 
                      id="email" 
                      type="email" 
                      maxLength={50}
                      required 
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:rounded-md transition-all duration-200 bg-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-gray-700 font-medium">Setor da Indústria</Label>
                  <Select>
                    <SelectTrigger className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:rounded-md transition-all duration-200 bg-transparent">
                      <SelectValue placeholder="Selecione..." />
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
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">Mensagem</Label>
                   <Textarea 
                    id="message" 
                    rows={4} 
                    className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:rounded-md transition-all duration-200 bg-transparent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-none transition-colors duration-200 shadow-none border-0"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            {/* Empty right column for future content */}
            <div className="hidden lg:block">
              {/* Reserved space for future image or animation */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
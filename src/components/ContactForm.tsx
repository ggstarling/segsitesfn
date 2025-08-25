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
        <h2 className="text-2xl text-center mb-8">Contato</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Entre em contato</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estamos prontos para ajudar você a transformar seus projetos com tecnologia de ponta em monitoramento estrutural.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">E-mail</p>
                  <p className="text-gray-600">contato@safena.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Telefone</p>
                  <p className="text-gray-600">(48) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Localização</p>
                  <p className="text-gray-600">Florianópolis, Santa Catarina</p>
                </div>
              </div>
            </div>
          </div>
          
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <Label htmlFor="phone" className="text-gray-700 font-medium">Telefone</Label>
                   <Input 
                    id="phone" 
                    type="tel" 
                    minLength={11}
                    maxLength={15}
                    className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:rounded-md transition-all duration-200 bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                   <Label htmlFor="profession" className="text-gray-700 font-medium">Profissão</Label>
                   <Input 
                    id="profession" 
                    type="text" 
                    maxLength={70}
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
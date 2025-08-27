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
              <svg 
                viewBox="0 0 500 500" 
                className="w-80 h-80 opacity-90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M168 64c-8 0-12 4-16 8-4 4-8 8-12 8s-8-4-12-8c-4-4-8-8-16-8s-12 4-16 8c-4 4-8 8-12 8-8 0-16-8-24-16-8-8-16-16-28-16-16 0-24 12-32 24-8 12-16 24-28 24-4 0-8-2-12-4-4-2-8-4-12-4-8 0-12 6-16 12-4 6-8 12-16 12-4 0-8-2-12-4-4-2-8-4-12-4-12 0-20 10-28 20-8 10-16 20-28 20-8 0-16-6-24-12-8-6-16-12-28-12-20 0-32 16-44 32-12 16-24 32-40 32-12 0-24-8-36-16-12-8-24-16-40-16-24 0-40 20-56 40-16 20-32 40-52 40-16 0-32-12-48-24-16-12-32-24-52-24-28 0-48 24-68 48-20 24-40 48-64 48-20 0-40-16-60-32-20-16-40-32-64-32-32 0-56 28-80 56-24 28-48 56-76 56-24 0-48-20-72-40-24-20-48-40-76-40-36 0-64 32-92 64-28 32-56 64-88 64-28 0-56-24-84-48-28-24-56-48-88-48-40 0-72 36-104 72-32 36-64 72-100 72-32 0-64-28-96-56-32-28-64-56-100-56-44 0-80 40-116 80-36 40-72 80-112 80-36 0-72-32-108-64-36-32-72-64-112-64-48 0-88 44-128 88-40 44-80 88-124 88-40 0-80-36-120-72-40-36-80-72-124-72-52 0-96 48-140 96-44 48-88 96-136 96-44 0-88-40-132-80-44-40-88-80-136-80"
                  fill="#3481bd"
                  fillOpacity="0.1"
                  stroke="#3481bd"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
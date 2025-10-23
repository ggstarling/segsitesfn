import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Apply mask: (XX) XXXXX-XXXX
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number has exactly 11 digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, preencha o telefone completo (XX) XXXXX-XXXX",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          message: formData.message,
          formType: 'contact'
        }
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', industry: '', message: '' });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          <div className="px-8">
            <h3 className="text-3xl font-normal text-foreground mb-8">Fale Conosco</h3>
            <p className="text-gray-600 leading-relaxed mb-4 mt-6">
              Para um contato personalizado, informe-nos seus dados:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="p-8 pt-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Nome"
                    maxLength={74}
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-muted-foreground sm:placeholder:text-gray-500"
                  />
                  
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="E-mail"
                    maxLength={50}
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-muted-foreground sm:placeholder:text-gray-500"
                  />

                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Telefone"
                    maxLength={15}
                    required 
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-muted-foreground sm:placeholder:text-gray-500"
                  />
                  
                  <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger className="h-12 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 [&>span]:placeholder:text-muted-foreground [&>span]:sm:placeholder:text-gray-500">
                      <SelectValue placeholder="Setor da Indústria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ciência de Dados" className="text-muted-foreground sm:text-gray-700">Ciência de Dados</SelectItem>
                      <SelectItem value="Construção Civil" className="text-muted-foreground sm:text-gray-700">Construção Civil</SelectItem>
                      <SelectItem value="Energia" className="text-muted-foreground sm:text-gray-700">Energia</SelectItem>
                      <SelectItem value="Infraestrutura" className="text-muted-foreground sm:text-gray-700">Infraestrutura</SelectItem>
                      <SelectItem value="Meio Ambiente" className="text-muted-foreground sm:text-gray-700">Meio Ambiente</SelectItem>
                      <SelectItem value="Transporte" className="text-muted-foreground sm:text-gray-700">Transporte</SelectItem>
                      <SelectItem value="Outro" className="text-muted-foreground sm:text-gray-700">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Textarea 
                    id="message" 
                    placeholder="Mensagem"
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-muted-foreground sm:placeholder:text-gray-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#3481bd' }}
                  className="w-full h-12 hover:opacity-90 text-white font-medium rounded-lg transition-all duration-200"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
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
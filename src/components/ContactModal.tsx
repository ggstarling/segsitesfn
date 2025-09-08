import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          industry: formData.industry,
          message: formData.message,
          formType: 'modal'
        }
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve.",
      });

      // Reset form and close modal
      setFormData({ name: '', email: '', industry: '', message: '' });
      onClose();

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl">Agende uma conversa</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <Input 
              id="modal-name" 
              type="text" 
              placeholder="Nome"
              maxLength={74} 
              required 
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="placeholder:text-muted-foreground sm:placeholder:text-muted-foreground"
            />
            
            <Input 
              id="modal-email" 
              type="email" 
              placeholder="E-mail"
              maxLength={50} 
              required 
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="placeholder:text-muted-foreground sm:placeholder:text-muted-foreground"
            />

            <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
              <SelectTrigger className="[&>span]:placeholder:text-muted-foreground [&>span]:sm:placeholder:text-muted-foreground">
                <SelectValue placeholder="Setor da Indústria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ciência de Dados" className="text-muted-foreground sm:text-muted-foreground">Ciência de Dados</SelectItem>
                <SelectItem value="Construção Civil" className="text-muted-foreground sm:text-muted-foreground">Construção Civil</SelectItem>
                <SelectItem value="Energia" className="text-muted-foreground sm:text-muted-foreground">Energia</SelectItem>
                <SelectItem value="Infraestrutura" className="text-muted-foreground sm:text-muted-foreground">Infraestrutura</SelectItem>
                <SelectItem value="Meio Ambiente" className="text-muted-foreground sm:text-muted-foreground">Meio Ambiente</SelectItem>
                <SelectItem value="Outro" className="text-muted-foreground sm:text-muted-foreground">Outro</SelectItem>
                <SelectItem value="Transporte" className="text-muted-foreground sm:text-muted-foreground">Transporte</SelectItem>
              </SelectContent>
            </Select>

            <Textarea 
              id="modal-message" 
              placeholder="Mensagem"
              rows={5} 
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="placeholder:text-muted-foreground sm:placeholder:text-muted-foreground"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
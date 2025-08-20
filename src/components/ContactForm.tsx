import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-12">Contato</h2>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" required />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" />
            </div>
            <div>
              <Label htmlFor="profession">Profissão</Label>
              <Input id="profession" type="text" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="industry">Setor da Indústria</Label>
            <Select>
              <SelectTrigger>
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
          
          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" rows={4} />
          </div>
          
          <Button type="submit" className="w-full">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
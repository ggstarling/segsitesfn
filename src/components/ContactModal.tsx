import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Agende uma conversa</DialogTitle>
        </DialogHeader>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-name">Nome</Label>
              <Input id="modal-name" type="text" required />
            </div>
            <div>
              <Label htmlFor="modal-email">E-mail</Label>
              <Input id="modal-email" type="email" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-phone">Telefone</Label>
              <Input id="modal-phone" type="tel" />
            </div>
            <div>
              <Label htmlFor="modal-profession">Profissão</Label>
              <Input id="modal-profession" type="text" />
            </div>
          </div>

          <div>
            <Label htmlFor="modal-industry">Setor da Indústria</Label>
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
            <Label htmlFor="modal-message">Mensagem</Label>
            <Textarea id="modal-message" rows={3} />
          </div>

          <Button type="submit" className="w-full">
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
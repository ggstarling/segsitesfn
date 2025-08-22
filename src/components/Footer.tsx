import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/lovable-uploads/3b8dcbac-971c-405e-a211-f2d6a8d87ff5.png"
              alt="Safena Logo"
              className="h-6 w-auto"
            />
          </div>

          {/* Company Info */}
          <p className="text-white mb-6">
            Safena Engenharia | CNPJ: XX.XXX.XXX/0001-XX | email@safena.com.br
          </p>

          {/* Social Icons and Address */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            <div className="text-sm text-white">
              <p>Rua Exemplo, 123 - Bairro</p>
              <p>Cidade - Estado, CEP: 00000-000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
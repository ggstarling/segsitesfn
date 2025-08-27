import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/lovable-uploads/3b8dcbac-971c-405e-a211-f2d6a8d87ff5.png"
              alt="Safena Logo"
              className="h-6 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Company Info */}
          <div className="text-white mb-8 text-center space-y-2">
            <p className="text-lg font-medium">Safena Engenharia</p>
            <p className="text-sm text-gray-300">CNPJ: 60.871.697/0001-06 | contato.safena@gmail.com | (48) 98839-7540</p>
          </div>

          {/* Social Icons and Address */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/safenaeng" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/safena.eng" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram className="h-7 w-7" />
              </a>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Rod. José Carlos Daux, 600 - Lote 2 - João Paulo, Florianópolis - SC, 88030-000
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
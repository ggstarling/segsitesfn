import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="w-full px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Left side menu */}
          <div className="flex items-center ml-8">
            {/* Logo */}
            <button onClick={scrollToTop} className="flex items-center mr-28">
              <img
                src="/lovable-uploads/81b574cd-6dab-4603-aa73-5b5fc5e0766e.png"
                alt="Safena Logo"
                className="h-6 w-auto"
              />
            </button>

            <div className="flex items-center space-x-10">
              <button onClick={scrollToTop} className={`transition-colors font-medium text-base ${location.pathname === "/" ? "text-[#3481bd]" : "text-gray-500 hover:text-blue-600"}`}>
                Início
              </button>

            {/* Sobre Nós Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center space-x-1 transition-colors font-medium text-base ${(location.pathname === "/about" || location.pathname === "/blog") ? "text-[#3481bd]" : "text-gray-500 hover:text-blue-600"}`}>
                <span>Sobre Nós</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50 min-w-[200px]">
                  <Link 
                    to="/about" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sobre
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Blog
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Contato
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-500 hover:text-blue-600 transition-colors font-medium text-base"
            >
              Serviços
            </button>

            <button
              onClick={() => scrollToSection("sensors")}
              className="text-gray-500 hover:text-blue-600 transition-colors font-medium text-base"
            >
              Sensores
              </button>
            </div>
          </div>

          {/* Right side menu */}
          <div className="hidden md:flex items-center space-x-6 mr-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
              <Globe className="h-4 w-4" />
              <ChevronDown className="w-3 h-3" />
            </button>

            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-white hover:text-blue-600 transition-colors font-medium text-base bg-primary hover:bg-primary/90 px-4 py-2 rounded-md"
            >
              Saiba Mais
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin } from "lucide-react";

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
    <header className="fixed top-0 w-full bg-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center">
            <img
              src="/lovable-uploads/81b574cd-6dab-4603-aa73-5b5fc5e0766e.png"
              alt="Safena Logo"
              className="h-8 w-auto"
            />
          </button>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-white hover:text-blue-400 transition-colors font-medium">
              Home
            </button>

            {/* Sobre Nós Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors font-medium">
                <span>Sobre Nós</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-slate-800 border border-slate-600 rounded-md shadow-lg py-2 z-50 min-w-[200px]">
                  <Link 
                    to="/about" 
                    className="block px-4 py-2 text-white hover:bg-slate-700 transition-colors"
                  >
                    Sobre
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block px-4 py-2 text-white hover:bg-slate-700 transition-colors"
                  >
                    Blog
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-slate-700 transition-colors"
                  >
                    Contato
                  </button>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-white hover:text-blue-400 transition-colors font-medium">
              Blog
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Contato
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-8">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <Button 
              onClick={() => scrollToSection("contact")} 
              className="bg-blue-600 hover:bg-blue-700 text-white border-0"
            >
              Book a Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
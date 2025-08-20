import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center">
            <img
              src="/lovable-uploads/b68fcd4d-a74c-402f-8b78-217f286ebed7.png"
              alt="Safena Logo"
              className="h-5 w-auto"
            />
          </button>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="hover:text-primary transition-colors font-medium">
              Home
            </button>

            {/* Sobre Nós Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-primary transition-colors font-medium">
                <span>Sobre Nós</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-background border border-border rounded-md shadow-lg py-2 z-50 min-w-[200px]">
                  <Link 
                    to="/about" 
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Sobre
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Blog
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Contato
                  </button>
                </div>
              )}
            </div>

            <Link to="/blog" className="hover:text-primary transition-colors font-medium">
              Blog
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>

            <Button onClick={() => scrollToSection("contact")} variant="outline">
              Agendar Conversa
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
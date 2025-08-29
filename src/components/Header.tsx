
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 100; // Account for fixed header height
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 100; // Account for fixed header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu on scroll
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    // Reset scroll position to top immediately
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      // Reset scroll position to top immediately after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on logo click
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;
      
      const sections = ["services", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for header height
      
      // Check if we're at the top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      
      // Check each section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const isHomeActive = location.pathname === "/" && activeSection === "home";
  const isServicesActive = location.pathname === "/" && activeSection === "services";
  const isContactActive = location.pathname === "/" && activeSection === "contact";

  return (
    <>
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="w-full px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={scrollToTop} className="flex items-center lg:ml-[3%]">
              <img
                src="/lovable-uploads/81b574cd-6dab-4603-aa73-5b5fc5e0766e.png"
                alt="Safena Logo"
                className="h-6 w-auto"
              />
            </button>

            {/* Desktop navigation menu - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => scrollToTop()}
                className={`transition-colors font-normal text-base ${isHomeActive ? "text-[#3481bd]" : "text-gray-500 hover:text-[#3481bd]"}`}
              >
                Início
              </button>

              {/* Sobre Nós Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className={`flex items-center space-x-1 transition-colors font-normal text-base ${(location.pathname === "/about" || location.pathname === "/blog") ? "text-[#3481bd]" : "text-gray-500 hover:text-[#3481bd]"}`}>
                  <span>Sobre Nós</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg py-3 z-50 min-w-[200px] animate-fade-in" 
                       style={{ 
                         boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
                       }}>
                    <button 
                      onClick={() => navigateToPage("/about")}
                      className="block w-full text-left px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-[#3481bd] transition-all duration-200"
                    >
                      Sobre
                    </button>
                    <button 
                      onClick={() => navigateToPage("/blog")}
                      className="block w-full text-left px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-[#3481bd] transition-all duration-200"
                    >
                      Blog
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("services")}
                className={`transition-colors font-normal text-base ${isServicesActive ? "text-[#3481bd]" : "text-gray-500 hover:text-[#3481bd]"}`}
              >
                Serviços
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors font-normal text-base ${isContactActive ? "text-[#3481bd]" : "text-gray-500 hover:text-[#3481bd]"}`}
              >
                Contato
              </button>
            </div>

            {/* Desktop CTA button */}
            <div className="hidden lg:flex items-center space-x-6 lg:mr-[3%]">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-white transition-colors font-normal text-base bg-primary hover:bg-primary/90 px-4 py-2 rounded-md"
              >
                Saiba Mais
              </button>
            </div>

            {/* Mobile hamburger menu */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-[73px] right-0 h-full w-80 max-w-[80vw] bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-6 space-y-6">
          {/* Mobile Navigation Links */}
          <button 
            onClick={() => scrollToTop()}
            className={`text-left text-lg font-normal ${isHomeActive ? "text-[#3481bd]" : "text-gray-700"}`}
          >
            Início
          </button>

          {/* Mobile Sobre Nós Section */}
          <div className="space-y-4">
            <span className={`text-lg font-normal ${(location.pathname === "/about" || location.pathname === "/blog") ? "text-[#3481bd]" : "text-gray-700"}`}>
              Sobre Nós
            </span>
            <div className="pl-0 space-y-3">
              <button 
                onClick={() => navigateToPage("/about")}
                className="block text-left text-base text-gray-600 hover:text-[#3481bd] transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => navigateToPage("/blog")}
                className="block text-left text-base text-gray-600 hover:text-[#3481bd] transition-colors"
              >
                Blog
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("services")}
            className={`text-left text-lg font-normal ${isServicesActive ? "text-[#3481bd]" : "text-gray-700"}`}
          >
            Serviços
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`text-left text-lg font-normal ${isContactActive ? "text-[#3481bd]" : "text-gray-700"}`}
          >
            Contato
          </button>

          {/* Mobile CTA button */}
          <button 
            onClick={() => scrollToSection("contact")} 
            className="w-full text-white bg-primary hover:bg-primary/90 px-4 py-3 rounded-md text-lg font-normal transition-colors mt-8"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

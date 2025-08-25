
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    // Reset scroll position to top immediately
    window.scrollTo(0, 0);
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
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="w-full px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center">
            <img
              src="/lovable-uploads/81b574cd-6dab-4603-aa73-5b5fc5e0766e.png"
              alt="Safena Logo"
              className="h-6 w-auto"
            />
          </button>

          {/* Center navigation menu */}
          <div className="flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => scrollToTop()}
                className={`transition-colors font-normal text-base ${isHomeActive ? "text-[#3481bd]" : "text-gray-500 hover:text-blue-600"}`}
              >
                Início
              </button>

            {/* Sobre Nós Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center space-x-1 transition-colors font-normal text-base ${(location.pathname === "/about" || location.pathname === "/blog") ? "text-[#3481bd]" : "text-gray-500 hover:text-blue-600"}`}>
                <span>Sobre Nós</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50 min-w-[200px]">
                  <button 
                    onClick={() => navigateToPage("/about")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sobre
                  </button>
                  <button 
                    onClick={() => navigateToPage("/blog")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Blog
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors font-normal text-base ${isServicesActive ? "text-[#3481bd]" : "text-gray-500 hover:text-blue-600"}`}
            >
              Serviços
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors font-normal text-base ${isContactActive ? "text-[#3481bd]" : "text-gray-500 hover:text-blue-600"}`}
            >
              Contato
            </button>
            </div>

          {/* Right side menu */}
          <div className="hidden md:flex items-center space-x-6 mr-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
              <Globe className="h-5 w-5" />
              <ChevronDown className="w-3 h-3" />
            </button>

            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-white hover:text-blue-600 transition-colors font-normal text-base bg-primary hover:bg-primary/90 px-4 py-2 rounded-md"
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

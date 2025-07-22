import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">
              DevBitcoin
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars text-lg" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-background border-l border-border p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-lg font-bold gradient-text">Menu</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-times" />
              </Button>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left py-2 hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

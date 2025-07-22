import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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

            <div className="flex items-center space-x-3">
              {/* Language Toggle Container */}
              <div className="hidden md:flex bg-background/80 backdrop-blur-sm rounded-lg p-1 shadow-sm border">
                <Button
                  variant={language === 'it' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('it')}
                  className={`px-2 py-1 text-xs ${language === 'it' ? 'bg-[hsl(var(--bitcoin))] text-white' : ''}`}
                >
                  🇮🇹
                </Button>
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-xs ${language === 'en' ? 'bg-[hsl(var(--bitcoin))] text-white' : ''}`}
                >
                  🇬🇧
                </Button>
              </div>
              
              {/* Theme Toggle Container */}
              <div className="hidden md:flex bg-background/80 backdrop-blur-sm rounded-lg p-1 shadow-sm border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-muted/80 transition-colors"
                >
                  {theme === "dark" ? (
                    <i className="fas fa-sun text-lg" />
                  ) : (
                    <i className="fas fa-moon text-lg" />
                  )}
                </Button>
              </div>
              
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
              
              {/* Mobile Controls */}
              <div className="border-t border-border pt-4 mt-6">
                <div className="space-y-3">
                  {/* Language Toggle Mobile */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Lingua:</span>
                    <Button
                      variant={language === 'it' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setLanguage('it')}
                      className={`px-2 py-1 text-xs ${language === 'it' ? 'bg-[hsl(var(--bitcoin))] text-white' : ''}`}
                    >
                      🇮🇹
                    </Button>
                    <Button
                      variant={language === 'en' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setLanguage('en')}
                      className={`px-2 py-1 text-xs ${language === 'en' ? 'bg-[hsl(var(--bitcoin))] text-white' : ''}`}
                    >
                      🇬🇧
                    </Button>
                  </div>
                  
                  {/* Theme Toggle Mobile */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Tema:</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      {theme === "dark" ? (
                        <i className="fas fa-sun text-lg" />
                      ) : (
                        <i className="fas fa-moon text-lg" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

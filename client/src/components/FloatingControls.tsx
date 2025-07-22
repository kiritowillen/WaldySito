import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/components/ThemeProvider";

export function FloatingControls() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-3">
      {/* Language Toggle Container - a sinistra */}
      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
        <div className="flex items-center space-x-1">
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
      </div>
      
      {/* Theme Toggle Container - a destra */}
      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
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
  );
}
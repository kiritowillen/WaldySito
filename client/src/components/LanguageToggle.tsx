import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
        <Button
          variant={language === 'it' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('it')}
          className={language === 'it' ? 'bg-[hsl(var(--bitcoin))] text-white' : ''}
        >
          🇮🇹 IT
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'bg-[hsl(var(--bitcoin))] text-white' : ''}
        >
          🇬🇧 EN
        </Button>
      </div>
    </div>
  );
}
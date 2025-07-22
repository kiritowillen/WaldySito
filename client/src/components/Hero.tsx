import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--bitcoin))]/10 to-[hsl(var(--gold))]/10" />
      
      {/* Floating Bitcoin Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <i className="fab fa-bitcoin text-4xl text-[hsl(var(--bitcoin))]/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <i className="fas fa-code text-3xl text-[hsl(var(--bitcoin))]/20" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float-delayed-2">
        <i className="fas fa-laptop-code text-2xl text-[hsl(var(--bitcoin))]/25" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Developer workspace with modern setup" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[hsl(var(--bitcoin))]/50 shadow-lg bitcoin-glow" 
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('hero.title.developer')}</span>
            <span className="text-foreground"> & </span>
            <span className="gradient-text">{t('hero.title.bitcoiner')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--bitcoin))] to-[hsl(var(--bitcoin-light))] text-white px-8 py-4 font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              {t('hero.viewWork')}
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[hsl(var(--bitcoin))] text-[hsl(var(--bitcoin))] px-8 py-4 font-semibold hover:bg-[hsl(var(--bitcoin))] hover:text-white transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              {t('hero.contact')}
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-muted-foreground hover:text-[hsl(var(--bitcoin))] text-2xl transition-colors">
              <i className="fab fa-github" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[hsl(var(--bitcoin))] text-2xl transition-colors">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[hsl(var(--bitcoin))] text-2xl transition-colors">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[hsl(var(--bitcoin))] text-2xl transition-colors">
              <i className="fab fa-bitcoin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

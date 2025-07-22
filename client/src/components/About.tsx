import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  const skills = [
    { icon: "fab fa-bitcoin", name: "Bitcoin", color: "text-[hsl(var(--bitcoin))]" },
    { icon: "fas fa-mobile-alt", name: "Flutter", color: "text-blue-400" },
    { icon: "fab fa-react", name: "React", color: "text-blue-500" },
    { icon: "fas fa-code", name: "C++", color: "text-blue-600" },
    { icon: "fab fa-java", name: "Java", color: "text-red-600" },
    { icon: "fab fa-python", name: "Python", color: "text-yellow-500" },
    { icon: "fas fa-database", name: "SQL", color: "text-gray-600" },
    { icon: "fab fa-html5", name: "HTML", color: "text-orange-500" },
    { icon: "fab fa-css3-alt", name: "CSS", color: "text-blue-500" },
    { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-400" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t('about.title')} <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Cryptocurrency development workspace" 
                className="rounded-2xl shadow-xl" 
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              {t('about.skills')} <span className="gradient-text">Skills</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {skills.map((skill, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                      <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-0">
                          <i className={`${skill.icon} text-4xl ${skill.color} mb-4`} />
                          <h4 className="font-semibold">{skill.name}</h4>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

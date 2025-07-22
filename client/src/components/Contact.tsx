import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "hello@devbitcoin.dev",
      href: "mailto:hello@devbitcoin.dev",
      description: t('contact.emailDesc')
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/devbitcoin",
      href: "https://linkedin.com/in/devbitcoin",
      description: t('contact.linkedinDesc')
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/devbitcoin",
      href: "https://github.com/devbitcoin",
      description: t('contact.githubDesc')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0 text-center">
                  <a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-16 h-16 bg-[hsl(var(--bitcoin))]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(var(--bitcoin))] transition-colors duration-300">
                      <i className={`${contact.icon} text-2xl text-[hsl(var(--bitcoin))] group-hover:text-white`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                    <p className="text-muted-foreground mb-3">{contact.value}</p>
                    <p className="text-sm text-muted-foreground/80">{contact.description}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link for simple frontend contact
    const mailtoLink = `mailto:hello@devbitcoin.dev?subject=${encodeURIComponent(formData.subject || 'Contact from website')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: t('contact.success'),
      description: t('contact.success'),
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "hello@devbitcoin.dev"
    },
    {
      icon: "fab fa-twitter",
      title: "Twitter",
      value: "@devbitcoin"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Remote / Global"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-github", url: "#" },
    { icon: "fab fa-linkedin", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-bitcoin", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t('contact.title')} <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
{t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in new opportunities, innovative projects, and 
                  meaningful conversations about the future of decentralized technology.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--bitcoin))]/20 rounded-lg flex items-center justify-center">
                      <i className={`${info.icon} text-[hsl(var(--bitcoin))]`} />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-[hsl(var(--bitcoin))] hover:text-white transition-all duration-300"
                    >
                      <i className={link.icon} />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="p-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-lightbulb text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Integration Tip</p>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        Interested in Bitcoin development? Let's discuss Lightning Network integration and decentralized applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-xl">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Oggetto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[hsl(var(--bitcoin))] to-[hsl(var(--bitcoin-light))] text-white py-4 font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:transform-none disabled:opacity-50"
                  >
                    {isSubmitting ? "Inviando..." : t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

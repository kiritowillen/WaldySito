export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "Home", section: "hero" },
    { name: "About", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" }
  ];

  const socialLinks = [
    { icon: "fab fa-github", url: "#" },
    { icon: "fab fa-linkedin", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-bitcoin", url: "#" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-2xl font-bold gradient-text mb-4">DevBitcoin</div>
            <p className="text-gray-400">
              Building the decentralized future, one project at a time.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-400 hover:text-[hsl(var(--bitcoin))] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-gray-400 hover:text-[hsl(var(--bitcoin))] text-xl transition-colors"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 DevBitcoin. Built with ❤️ and Bitcoin in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

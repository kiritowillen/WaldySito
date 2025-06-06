import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
    { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-500" },
    { icon: "fab fa-react", name: "React", color: "text-blue-500" },
    { icon: "fab fa-node-js", name: "Node.js", color: "text-green-500" },
    { icon: "fab fa-bitcoin", name: "Blockchain", color: "text-[hsl(var(--bitcoin))]" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Developer, Bitcoin enthusiast, and technology innovator
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
                I'm a passionate full-stack developer with over 5 years of experience building scalable web applications 
                and blockchain solutions. My journey into Bitcoin started in 2018, and since then I've been fascinated 
                by the potential of decentralized technologies to reshape our world.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing about Bitcoin 
                technology, or exploring the latest developments in the crypto space. I believe in building 
                applications that not only solve problems but also promote financial sovereignty and privacy.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card className="text-center p-4 shadow-md">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-[hsl(var(--bitcoin))]">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 shadow-md">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-[hsl(var(--bitcoin))]">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical <span className="gradient-text">Skills</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <i className={`${skill.icon} text-4xl ${skill.color} mb-4`} />
                    <h4 className="font-semibold">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

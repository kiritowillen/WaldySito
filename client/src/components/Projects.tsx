import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: string;
  githubUrl: string;
  demoUrl: string;
}

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: t('project.bitcoin.title'),
      description: t('project.bitcoin.description'),
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["React", "Node.js", "Bitcoin API", "Chart.js"],
      icon: "fab fa-bitcoin",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: t('project.defi.title'),
      description: t('project.defi.description'),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Vue.js", "Web3", "Solidity", "D3.js"],
      icon: "fas fa-chart-line",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: t('project.ecommerce.title'),
      description: t('project.ecommerce.description'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Next.js", "Stripe", "Lightning", "MongoDB"],
      icon: "fas fa-shopping-cart",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--bitcoin))]/20 to-transparent" />
                    {selectedProject === project.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-white text-center">
                          <i className="fas fa-expand text-3xl mb-2" />
                          <p>Click to close</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <i className={`${project.icon} text-[hsl(var(--bitcoin))] text-2xl mr-3`} />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-[hsl(var(--bitcoin))]/20 text-[hsl(var(--bitcoin))]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.githubUrl} className="flex items-center text-[hsl(var(--bitcoin))] hover:text-[hsl(var(--bitcoin-light))] transition-colors">
                        <i className="fab fa-github mr-2" /> {t('projects.code')}
                      </a>
                      <a href={project.demoUrl} className="flex items-center text-[hsl(var(--bitcoin))] hover:text-[hsl(var(--bitcoin-light))] transition-colors">
                        <i className="fas fa-external-link-alt mr-2" /> {t('projects.demo')}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

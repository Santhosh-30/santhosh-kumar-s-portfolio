import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Shield, Tv, User } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Privacy Scoring Application",
      description: "Designed and developed a privacy scoring application to assess and visualize data privacy levels, incorporating secure data handling, API integration, and efficient state management for a seamless user experience.",
      technologies: ["React.js", "API Integration", "Data Visualization", "Security"],
      icon: Shield,
      color: "text-accent",
      github: "#",
      demo: "#"
    },
    {
      title: "Disney+ Hotstar Clone",
      description: "Developed a responsive web application mimicking the user interface and functionality of Disney+ Hotstar. Utilized React.js for dynamic rendering and API integration to fetch and display movie information.",
      technologies: ["React.js", "API Integration", "Responsive Design", "Movie Database"],
      icon: Tv,
      color: "text-primary",
      github: "#",
      demo: "#"
    },
    {
      title: "Responsive Portfolio",
      description: "Created a personal portfolio website using HTML5, CSS, and React.js, showcasing projects, skills, and experiences with a modern and responsive design.",
      technologies: ["React.js", "HTML5", "CSS3", "Responsive Design"],
      icon: User,
      color: "text-accent",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise through practical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <project.icon className={`w-12 h-12 ${project.color}`} />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground mb-3">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/santhoshkumar', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Yubi",
      position: "Intern",
      location: "Chennai",
      duration: "March 2025 - Present",
      current: true,
      achievements: [
        "Worked on optimizing solutions for analyzing bank statements, significantly improving result accuracy and efficiency",
        "Contributed to the Human-in-the-Loop (HITL) process, enhancing system performance through effective feedback integration",
        "Collaborated with cross-functional teams, gaining insights into organizational culture and fostering strong teamwork skills"
      ],
      technologies: ["Data Analysis", "Process Optimization", "HITL Systems"]
    },
    {
      company: "KnackForge",
      position: "Intern",
      location: "Chennai",
      duration: "July 2024 - September 2024",
      current: false,
      achievements: [
        "Developed a Weather Application using React.js with responsive design and API integration",
        "Collaborated with cross-functional teams to design and implement new features",
        "Debugged and resolved software issues to improve application performance and user experience"
      ],
      technologies: ["React.js", "JavaScript", "API Integration", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building real-world solutions and growing as a developer
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Building2 className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    {exp.current && (
                      <Badge className="bg-accent text-accent-foreground w-fit">
                        Current
                      </Badge>
                    )}
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-accent">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
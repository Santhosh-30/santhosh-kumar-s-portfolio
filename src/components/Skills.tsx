import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java"],
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Backend Development",
      skills: ["Spring", "Spring Boot"],
      color: "bg-accent/20 text-accent"
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript"],
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Database",
      skills: ["MySQL"],
      color: "bg-accent/20 text-accent"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "API Integration", "Responsive Design"],
      color: "bg-primary/20 text-primary"
    }
  ];

  const achievements = [
    {
      title: "IT Fest Participation",
      description: "Actively participated in various IT fests, achieving recognition for innovative solutions in coding challenges."
    },
    {
      title: "Open Source Contributions",
      description: "Earned bounties for contributions to projects on Aptos Labs, collaborating with The Phoenix Guild."
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technical expertise and academic accomplishments
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Technical Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        className={`skill-card ${category.color}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-accent">Academic Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Summary */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-accent">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-gradient border-border text-center hover-lift">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Engineering</h4>
                <p className="text-sm text-muted-foreground mb-2">Jaya Engineering College</p>
                <p className="text-accent font-semibold">CGPA: 8.2</p>
                <p className="text-xs text-muted-foreground">Nov 2021 - Present</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border text-center hover-lift">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">12th Standard</h4>
                <p className="text-sm text-muted-foreground mb-2">Don Bosco School</p>
                <p className="text-accent font-semibold">74.10%</p>
                <p className="text-xs text-muted-foreground">Computer Science</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border text-center hover-lift">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">10th Standard</h4>
                <p className="text-sm text-muted-foreground mb-2">CSI Bain School</p>
                <p className="text-accent font-semibold">60.00%</p>
                <p className="text-xs text-muted-foreground">Science Stream</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
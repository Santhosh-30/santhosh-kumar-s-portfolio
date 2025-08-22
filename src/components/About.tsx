import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.2" },
    { icon: Award, label: "Projects", value: "3+" },
    { icon: Users, label: "Internships", value: "2" },
    { icon: Target, label: "Experience", value: "1+ Year" },
  ];

  const traits = [
    "Effective communicator and good orator",
    "Growth-oriented and performance-focused",
    "Collaborative and proactive",
    "Decisive and calm under pressure"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven software developer with a passion for creating impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Career Objective</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a driven software developer with a strong foundation in <span className="text-primary font-semibold">Spring and Spring Boot</span>, 
              passionate about crafting robust, scalable backend solutions. I thrive on building efficient applications 
              that solve real-world problems and am excited to join a dynamic team where I can leverage my skills, 
              dive into new technologies, and grow as a developer.
            </p>
            
            <h4 className="text-xl font-semibold mb-4 text-accent">Personal Traits</h4>
            <ul className="space-y-3">
              {traits.map((trait, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {trait}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="card-gradient border-border hover-lift">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6 card-gradient border-border">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-accent">Quick Facts</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📍 Chennai, India</p>
                  <p>🎓 Computer Science Engineering Student</p>
                  <p>💼 Currently Interning at Yubi</p>
                  <p>🚀 Open Source Contributor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
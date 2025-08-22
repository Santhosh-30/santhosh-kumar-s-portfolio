import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient">Santhosh Kumar S</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Software Developer passionate about crafting robust, scalable backend solutions 
            with <span className="text-primary font-semibold">Spring Boot</span> and 
            <span className="text-accent font-semibold"> React.js</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="hero-gradient text-white font-semibold px-8 py-6 text-lg hover-lift"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg hover-lift"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => window.open('tel:+916382493748')}
            >
              <Phone size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => window.open('mailto:santhoshkumar.11132003@gmail.com')}
            >
              <Mail size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => window.open('https://github.com/santhoshkumar', '_blank')}
            >
              <Github size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => window.open('https://linkedin.com/in/santhoshkumar', '_blank')}
            >
              <Linkedin size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
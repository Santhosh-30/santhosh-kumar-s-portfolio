import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Santhosh-30",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/santhosh-kumar-s-5650b0267/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:santhoshkumar.11132003@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">Santhosh Kumar S</h3>
            <p className="text-muted-foreground">Software Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => window.open(social.url, '_blank')}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </Button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex justify-center flex-wrap gap-6 mb-8 text-sm">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Back to Top ↑
          </Button>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              © {currentYear} Santhosh Kumar S. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/80 backdrop-blur-sm border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SK.
              </span>
              <span className="text-foreground/70">Shakyanand Kamble</span>
            </div>
            <p className="text-sm text-foreground/60">
              Senior Software Developer • 8+ Years Experience
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-transform duration-200"
              asChild
            >
              <a
                href="https://github.com/shakyanandk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-transform duration-200"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/shakyanand-kamble-63b01593/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-transform duration-200"
              asChild
            >
              <a
                href="mailto:shakyanand.kamble@email.com"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Shakyanand Kamble. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
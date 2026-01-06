import { Github, Linkedin, FileText, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { about, header } from '@/data/content';
import { formatHighlightedText } from '@/lib/text-utils';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        {/* Animated gradient orbs specific to hero */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-accent/8 to-primary/8 rounded-full blur-3xl animate-pulse opacity-40 animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary p-1 animate-float">
              <img
                src="/profile-image.avif"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I am{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {about.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6 font-medium">
            A {about.role}
          </h2>

          <div className="flex items-center justify-center gap-2 text-foreground/70 mb-8">
            <MapPin size={18} />
            <span>{about.location}</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {formatHighlightedText(about.description)}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary hover:scale-105 transition-all duration-200"
              asChild
            >
              <a
                href={about.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2" size={18} />
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="lg"
              className="hover:scale-110 transition-transform duration-200"
              asChild
            >
              <a
                href={about.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="hover:scale-110 transition-transform duration-200"
              asChild
            >
              <a
                href={about.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center absolute bottom-8 w-full animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
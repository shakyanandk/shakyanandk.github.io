import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contact, sections, about } from '@/data/content';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      description: 'Best way to reach me'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: about.name,
      href: about.social.linkedin,
      description: 'Professional networking'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@shakyanandk',
      href: about.social.github,
      description: 'Code repositories'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {sections.contact.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card
                key={index}
                className="group bg-gradient-card backdrop-blur-sm border-border/20 hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                    {method.label}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{method.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    asChild
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-gradient-card backdrop-blur-sm border-border/20 shadow-glass">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={20} className="text-primary" />
                <span className="text-foreground/70">{contact.location}</span>
              </div>
              <p className="text-foreground/60 mb-6 max-w-md">
                {contact.intro}
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-transform duration-200"
                asChild
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail className="mr-2" size={18} />
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
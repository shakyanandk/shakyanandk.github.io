import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { skills, sections } from '@/data/content';
import { formatHighlightedText } from '@/lib/text-utils';

const Skills = () => {

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {sections.skills.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {sections.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <Card
              key={index}
              className="group bg-gradient-card backdrop-blur-sm border-border/20 hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-card backdrop-blur-sm rounded-lg border border-border/20">
            <span className="text-foreground/70">
              {formatHighlightedText(sections.skills.experience)} of professional software development experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
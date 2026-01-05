import { lazy, Suspense, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, ChevronDown, ChevronUp } from 'lucide-react';

const GuessTheNumber = lazy(() => import('./GuessTheNumber'));

const InteractiveDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimatingOut(false);
    } else if (shouldRender) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsAnimatingOut(false);
      }, 500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  return (
    <section id="interactive" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Demo
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            A fun mini-game showcasing interactive UI and state management
          </p>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            size="lg"
            className="group"
          >
            <Gamepad2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {isOpen ? 'Hide Game' : 'Try the Game'}
            {isOpen ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>

        {shouldRender && (
          <div className={`${
            isAnimatingOut 
              ? 'animate-out fade-out slide-out-to-top-4 duration-500' 
              : 'animate-in fade-in slide-in-from-top-4 duration-500'
          }`}>
            <Suspense
              fallback={
                <Card className="bg-gradient-card backdrop-blur-sm border-border/20">
                  <CardContent className="flex items-center justify-center py-20">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-foreground/70">Loading game...</p>
                    </div>
                  </CardContent>
                </Card>
              }
            >
              <GuessTheNumber />
            </Suspense>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveDemo;

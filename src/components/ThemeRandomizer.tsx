import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useThemeColorContext } from '@/components/ThemeColorProvider';
import { useState } from 'react';

const ThemeRandomizer = () => {
  const { randomizeTheme, currentTheme, isTransitioning } = useThemeColorContext();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRandomize = () => {
    setIsAnimating(true);
    const newTheme = randomizeTheme();
    
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
    
    // Optional: Show a subtle notification (you can enhance this)
    console.log(`🎨 Theme changed to: ${newTheme.name}`);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRandomize}
            disabled={isTransitioning}
            className={`
              hover:scale-110 transition-all duration-200
              ${isAnimating ? 'animate-spin' : ''}
              relative group
            `}
            aria-label="Randomize theme colors"
          >
            <Sparkles 
              size={20} 
              className={`
                ${isAnimating ? 'text-primary' : ''}
                group-hover:text-primary transition-colors
              `}
            />
            {isAnimating && (
              <span className="absolute inset-0 rounded-md animate-ping bg-primary/20" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">
            <span className="font-semibold">Surprise me!</span>
            <br />
            <span className="text-xs text-muted-foreground">
              Current: {currentTheme.name}
            </span>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeRandomizer;

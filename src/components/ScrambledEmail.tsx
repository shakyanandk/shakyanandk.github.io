import { useState, useEffect } from 'react';
import { Mail, Eye } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ScrambledEmailProps {
  email: string;
  className?: string;
  showIcon?: boolean;
  asButton?: boolean;
  iconOnly?: boolean;
}

/**
 * Scramble an email address for spam protection
 */
const scrambleEmail = (email: string): string => {
  const [local, domain] = email.split('@');
  
  // Shuffle the local part
  const shuffled = local
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
  
  return `${shuffled}@${domain}`;
};

/**
 * Unscramble animation - gradually reveals the correct email
 */
const useUnscrambleAnimation = (scrambled: string, real: string, isUnscrambling: boolean) => {
  const [displayed, setDisplayed] = useState(scrambled);
  
  useEffect(() => {
    if (!isUnscrambling) {
      setDisplayed(scrambled);
      return;
    }
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex >= real.length) {
        clearInterval(interval);
        return;
      }
      
      setDisplayed(prev => {
        const chars = prev.split('');
        chars[currentIndex] = real[currentIndex];
        return chars.join('');
      });
      
      currentIndex++;
    }, 30); // 30ms per character for smooth animation
    
    return () => clearInterval(interval);
  }, [isUnscrambling, scrambled, real]);
  
  return displayed;
};

const ScrambledEmail = ({ 
  email, 
  className = '', 
  showIcon = true,
  asButton = false,
  iconOnly = false
}: ScrambledEmailProps) => {
  const [scrambled] = useState(() => scrambleEmail(email));
  const [isRevealed, setIsRevealed] = useState(false);
  const [isUnscrambling, setIsUnscrambling] = useState(false);
  const displayedEmail = useUnscrambleAnimation(scrambled, email, isUnscrambling);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isRevealed) {
      // Already revealed, open mailto
      window.location.href = `mailto:${email}`;
    } else {
      // Start unscrambling animation
      setIsUnscrambling(true);
      
      // After animation completes, open mailto and reset states
      setTimeout(() => {
        setIsRevealed(true);
        // setIsUnscrambling(false);
        window.location.href = `mailto:${email}`;
      }, email.length * 30 + 200); // Animation time + small delay
    }
  };

  const content = iconOnly ? (
    <>
      <Mail size={20} className={isUnscrambling ? 'text-primary animate-pulse' : ''} />
    </>
  ) : (
    <>
      {showIcon && <Mail className="mr-2" size={18} />}
      <span className={`font-mono ${isUnscrambling ? 'hover:text-primary-foreground' : ''}`}>
        {displayedEmail}
      </span>
      {!isRevealed && showIcon && (
        <Eye className="ml-2 opacity-50" size={16} />
      )}
    </>
  );

  if (asButton) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleClick}
              className={className}
              aria-label={isRevealed ? `Send email to ${email}` : 'Click to reveal email'}
            >
              {content}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">
              {isRevealed ? 'Click to send email' : 'Click to reveal email address'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="#"
            onClick={handleClick}
            className={className}
            aria-label={isRevealed ? `Send email to ${email}` : 'Click to reveal email'}
          >
            {content}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">
            {isRevealed ? 'Click to send email' : 'Click to reveal & send email'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ScrambledEmail;

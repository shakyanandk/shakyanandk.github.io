import { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
  duration?: number;
  particleCount?: number;
  type?: 'fall' | 'explode' | 'fireworks';
}

const Confetti = ({ 
  active, 
  duration = 3000, 
  particleCount = 50,
  type = 'explode'
}: ConfettiProps) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    animationDelay: number;
    backgroundColor: string;
    rotation: number;
    animationType: string;
    trajectory?: number; // for fireworks
  }>>([]);

  useEffect(() => {
    if (active) {
      const colors = [
        '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
        '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739'
      ];

      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: type === 'explode' ? 50 + (Math.random() - 0.5) * 10 : Math.random() * 100,
        animationDelay: Math.random() * 0.5,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        animationType: type,
        trajectory: type === 'fireworks' ? Math.random() * 180 - 90 : undefined, // -90 to 90 degrees
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, duration, particleCount, type]);

  if (!active || particles.length === 0) return null;

  const getAnimationClass = (animationType: string) => {
    switch (animationType) {
      case 'fall':
        return 'animate-confetti-fall';
      case 'explode':
        return 'animate-confetti-explode';
      case 'fireworks':
        return 'animate-confetti-fireworks';
      default:
        return 'animate-confetti-explode';
    }
  };

  const getInitialPosition = (animationType: string) => {
    switch (animationType) {
      case 'fall':
        return { top: '-10px' };
      case 'explode':
        return { bottom: '0', top: 'auto' };
      case 'fireworks':
        return { bottom: '0', top: 'auto' };
      default:
        return { bottom: '0', top: 'auto' };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-3 h-3 ${getAnimationClass(particle.animationType)}`}
          style={{
            left: `${particle.left}%`,
            ...getInitialPosition(particle.animationType),
            backgroundColor: particle.backgroundColor,
            animationDelay: `${particle.animationDelay}s`,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            ...(particle.trajectory !== undefined && {
              '--trajectory': `${particle.trajectory}deg`,
            } as React.CSSProperties),
          }}
        />
      ))}
      <style>{`
        /* Fall from top - original animation */
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-confetti-fall {
          animation: confetti-fall 3s ease-in forwards;
        }

        /* Explode from bottom center - like a confetti cannon */
        @keyframes confetti-explode {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0);
            opacity: 1;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: 
              translateY(-100vh) 
              translateX(calc((var(--random-x, 0) - 0.5) * 200vw))
              rotate(720deg)
              scale(1);
            opacity: 0;
          }
        }
        
        .animate-confetti-explode {
          --random-x: ${Math.random()};
          animation: confetti-explode 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Fireworks style - shoot up at angles */
        @keyframes confetti-fireworks {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0);
            opacity: 1;
          }
          15% {
            opacity: 1;
            scale(1);
          }
          100% {
            transform: 
              translateY(-120vh) 
              translateX(calc(tan(var(--trajectory, 0deg)) * -120vh))
              rotate(1080deg);
            opacity: 0;
          }
        }
        
        .animate-confetti-fireworks {
          animation: confetti-fireworks 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Confetti;

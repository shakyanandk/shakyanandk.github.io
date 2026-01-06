import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

interface CodeSymbol {
  id: number;
  symbol: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const ParallaxElements = () => {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [codeSymbols, setCodeSymbols] = useState<CodeSymbol[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    // Initialize particles for constellation
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(initialParticles);

    // Initialize code symbols
    const symbols = [
      '</>', '{}', '[]', '<>', '()', '=>', '++', '&&', '||',  '...', '?.', '??', '>=', '<=', '$', '%', '^', '*'
    ];
    const initialSymbols: CodeSymbol[] = symbols.map((symbol, i) => ({
      id: i,
      symbol,
      x: Math.random() * 90 + 5,
      y: Math.random() * 80 + 10,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
    }));
    setCodeSymbols(initialSymbols);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate connections between nearby particles
  const getConnections = () => {
    const connections: { x1: number; y1: number; x2: number; y2: number; distance: number }[] = [];
    const maxDistance = 15; // Maximum distance for connection (in percentage)

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - particles[i].x;
        const dy = particles[j].y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          connections.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
            distance,
          });
        }
      }
    }
    return connections;
  };

  const connections = getConnections();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Scroll-based gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
        style={{
          top: `${20 + scrollY * 0.1}%`,
          left: `${10 + scrollY * 0.05}%`,
          transform: `rotate(${scrollY * 0.1}deg)`,
        }}
      />
      
      <div 
        className="absolute w-80 h-80 bg-gradient-to-tl from-accent/8 to-primary/3 rounded-full blur-2xl"
        style={{
          top: `${60 + scrollY * 0.15}%`,
          right: `${15 + scrollY * 0.08}%`,
          transform: `rotate(${-scrollY * 0.1}deg)`,
        }}
      />

      {/* Particle constellation */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map((conn, i) => (
          <line
            key={`conn-${i}`}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            opacity={1 - conn.distance / 15}
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />
        ))}

        {/* Particles */}
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r="2"
            fill="hsl(var(--primary))"
            opacity="0.4"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />
        ))}
      </svg>

      {/* Floating code symbols */}
      {codeSymbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute font-mono text-lg text-primary/15 select-none"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            animation: `float ${symbol.duration}s ease-in-out infinite`,
            animationDelay: `${symbol.delay}s`,
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          {symbol.symbol}
        </div>
      ))}

      {/* Geometric elements */}
      <div 
        className="absolute w-12 h-12 border-2 border-primary/20"
        style={{
          top: `${30 + scrollY * 0.2}%`,
          left: `${80 + scrollY * 0.1}%`,
          transform: `rotate(${scrollY * 0.2}deg)`,
        }}
      />

      <div 
        className="absolute w-8 h-8 bg-accent/10 rotate-45"
        style={{
          top: `${70 + scrollY * 0.25}%`,
          left: `${20 + scrollY * 0.15}%`,
          transform: `rotate(${45 + scrollY * 0.3}deg)`,
        }}
      />

      {/* Animated dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`,
          }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="25%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-draw-line"
        />
        <line
          x1="0"
          y1="70%"
          x2="100%"
          y2="75%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-draw-line animation-delay-3000"
        />
      </svg>
    </div>
  );
};

export default ParallaxElements;
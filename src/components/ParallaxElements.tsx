import { useEffect, useState } from 'react';

const ParallaxElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating shapes with parallax */}
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
    </div>
  );
};

export default ParallaxElements;
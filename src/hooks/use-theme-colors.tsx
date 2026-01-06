import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { 
  themes, 
  getThemeById, 
  getRandomTheme, 
  DEFAULT_THEME_ID,
  type Theme 
} from '@/data/themes';
import { 
  applyTheme, 
  getSavedThemeId 
} from '@/lib/theme-utils';

/**
 * Custom hook to manage color themes
 * Works alongside next-themes for dark/light mode
 */
export const useThemeColors = () => {
  const { theme: mode, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const savedId = getSavedThemeId();
    return getThemeById(savedId || DEFAULT_THEME_ID) || themes[0];
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Determine if we're in dark mode
  const isDark = mode === 'dark' || (mode === 'system' && systemTheme === 'dark');

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    // Apply theme immediately on mount to prevent flash
    applyTheme(currentTheme, isDark);
  }, []);

  // Apply theme whenever it changes or dark mode toggles (skip first render since we handle it above)
  useEffect(() => {
    if (mounted) {
      applyTheme(currentTheme, isDark);
    }
  }, [currentTheme, isDark, mounted]);

  /**
   * Change to a specific theme
   */
  const changeTheme = (themeId: string) => {
    const newTheme = getThemeById(themeId);
    if (newTheme && newTheme.id !== currentTheme.id) {
      setIsTransitioning(true);
      setCurrentTheme(newTheme);
      
      // Reset transition state after animation
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  /**
   * Pick a random theme (excluding current)
   */
  const randomizeTheme = () => {
    const newTheme = getRandomTheme(currentTheme.id);
    setIsTransitioning(true);
    
    // Add transition class to enable smooth color changes
    document.documentElement.classList.add('theme-transitioning');
    
    setCurrentTheme(newTheme);
    
    // Reset transition state and remove class after animation
    setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
    
    return newTheme;
  };

  return {
    currentTheme,
    themes,
    changeTheme,
    randomizeTheme,
    isTransitioning,
    isDark,
  };
};

import { createContext, useContext, ReactNode } from 'react';
import { useThemeColors } from '@/hooks/use-theme-colors';
import type { Theme } from '@/data/themes';

interface ThemeColorContextType {
  currentTheme: Theme;
  themes: Theme[];
  changeTheme: (themeId: string) => void;
  randomizeTheme: () => Theme;
  isTransitioning: boolean;
  isDark: boolean;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export const ThemeColorProvider = ({ children }: { children: ReactNode }) => {
  const themeColors = useThemeColors();
  
  return (
    <ThemeColorContext.Provider value={themeColors}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColorContext = () => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error('useThemeColorContext must be used within ThemeColorProvider');
  }
  return context;
};

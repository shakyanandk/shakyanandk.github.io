import { Theme, ThemeColors } from '@/data/themes';

/**
 * Storage key for the current color theme
 */
export const COLOR_THEME_STORAGE_KEY = 'color-theme';

/**
 * Generate gradient CSS values based on theme colors
 */
const generateGradients = (colors: ThemeColors) => {
  return {
    'gradient-primary': `linear-gradient(90deg, hsl(${colors.primary}) 0%, hsl(${colors.primaryLight}) 70%, hsl(${colors.accentLight}) 100%)`,
    'gradient-hero': `linear-gradient(135deg, hsl(${colors.primary} / 0.1), hsl(${colors.accent} / 0.1))`,
    'gradient-card': `linear-gradient(145deg, hsl(${colors.cardGlass}), hsl(${colors.surface}))`,
  };
};

/**
 * Generate shadow CSS values based on theme colors
 */
const generateShadows = (colors: ThemeColors) => {
  return {
    'shadow-glass': `0 8px 32px hsl(${colors.primary} / 0.1)`,
    'shadow-hover': `0 20px 40px hsl(${colors.primary} / 0.15)`,
  };
};

/**
 * Apply theme colors to CSS custom properties
 */
export const applyThemeColors = (colors: ThemeColors): void => {
  const root = document.documentElement;
  
  // Apply each color as a CSS custom property
  Object.entries(colors).forEach(([key, value]) => {
    // Convert camelCase to kebab-case (e.g., primaryLight -> primary-light)
    const cssVarName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    root.style.setProperty(`--${cssVarName}`, value);
  });
  
  // Apply dynamic gradients
  const gradients = generateGradients(colors);
  Object.entries(gradients).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
  
  // Apply dynamic shadows
  const shadows = generateShadows(colors);
  Object.entries(shadows).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};

/**
 * Get the current theme from localStorage
 */
export const getSavedThemeId = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COLOR_THEME_STORAGE_KEY);
};

/**
 * Save the current theme to localStorage
 */
export const saveThemeId = (themeId: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COLOR_THEME_STORAGE_KEY, themeId);
};

/**
 * Apply a complete theme (light or dark variant based on current mode)
 */
export const applyTheme = (theme: Theme, isDark: boolean): void => {
  const colors = isDark ? theme.dark : theme.light;
  applyThemeColors(colors);
  saveThemeId(theme.id);
};

/**
 * Get computed CSS variable value
 */
export const getCSSVariable = (varName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${varName}`)
    .trim();
};

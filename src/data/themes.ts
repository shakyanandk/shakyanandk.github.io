/**
 * Theme System Configuration
 * Each theme contains HSL color values for both light and dark modes
 * All colors maintain proper contrast ratios for accessibility
 */

export interface ThemeColors {
  // Core colors
  background: string;
  foreground: string;
  surface: string;
  
  // Brand colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  accentLight: string;
  
  // UI colors
  card: string;
  cardForeground: string;
  cardGlass: string;
  
  popover: string;
  popoverForeground: string;
  
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  
  muted: string;
  mutedForeground: string;
  
  accentForeground: string;
  
  destructive: string;
  destructiveForeground: string;
  
  border: string;
  input: string;
  ring: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export const themes: Theme[] = [
  {
    id: 'professional-blue',
    name: 'Professional Blue',
    description: 'Clean and professional blue theme',
    light: {
      background: '220 15% 97%',
      foreground: '222.2 84% 4.9%',
      surface: '220 20% 98%',
      
      primary: '210 85% 45%',
      primaryLight: '210 85% 55%',
      primaryDark: '210 85% 35%',
      accent: '195 100% 45%',
      accentLight: '195 100% 55%',
      
      card: '220 20% 99%',
      cardForeground: '222.2 84% 4.9%',
      cardGlass: '220 20% 99% / 0.7',
      
      popover: '220 20% 99%',
      popoverForeground: '222.2 84% 4.9%',
      
      primaryForeground: '210 40% 98%',
      secondary: '210 40% 96.1%',
      secondaryForeground: '222.2 47.4% 11.2%',
      
      muted: '210 40% 96.1%',
      mutedForeground: '215.4 16.3% 46.9%',
      
      accentForeground: '222.2 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '210 40% 98%',
      
      border: '214.3 31.8% 91.4%',
      input: '214.3 31.8% 91.4%',
      ring: '210 85% 45%',
    },
    dark: {
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      surface: '220 15% 8%',
      
      primary: '210 85% 55%',
      primaryLight: '210 85% 65%',
      primaryDark: '210 85% 45%',
      accent: '195 100% 55%',
      accentLight: '195 100% 65%',
      
      card: '222.2 84% 4.9%',
      cardForeground: '210 40% 98%',
      cardGlass: '220 15% 10% / 0.6',
      
      popover: '222.2 84% 4.9%',
      popoverForeground: '210 40% 98%',
      
      primaryForeground: '222.2 47.4% 11.2%',
      secondary: '217.2 32.6% 17.5%',
      secondaryForeground: '210 40% 98%',
      
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      
      accentForeground: '210 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '210 40% 98%',
      
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '210 85% 55%',
    },
  },
  
  {
    id: 'purple-tech',
    name: 'Purple Tech',
    description: 'Modern purple for creative minds',
    light: {
      background: '280 15% 97%',
      foreground: '280 84% 4.9%',
      surface: '280 20% 98%',
      
      primary: '270 85% 50%',
      primaryLight: '270 85% 60%',
      primaryDark: '270 85% 40%',
      accent: '285 100% 45%',
      accentLight: '285 100% 55%',
      
      card: '280 20% 99%',
      cardForeground: '280 84% 4.9%',
      cardGlass: '280 20% 99% / 0.7',
      
      popover: '280 20% 99%',
      popoverForeground: '280 84% 4.9%',
      
      primaryForeground: '280 40% 98%',
      secondary: '280 40% 96.1%',
      secondaryForeground: '280 47.4% 11.2%',
      
      muted: '280 40% 96.1%',
      mutedForeground: '280 16.3% 46.9%',
      
      accentForeground: '280 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '280 40% 98%',
      
      border: '280 31.8% 91.4%',
      input: '280 31.8% 91.4%',
      ring: '270 85% 50%',
    },
    dark: {
      background: '280 84% 4.9%',
      foreground: '280 40% 98%',
      surface: '280 15% 8%',
      
      primary: '270 85% 60%',
      primaryLight: '270 85% 70%',
      primaryDark: '270 85% 50%',
      accent: '285 100% 55%',
      accentLight: '285 100% 65%',
      
      card: '280 84% 4.9%',
      cardForeground: '280 40% 98%',
      cardGlass: '280 15% 10% / 0.6',
      
      popover: '280 84% 4.9%',
      popoverForeground: '280 40% 98%',
      
      primaryForeground: '280 47.4% 11.2%',
      secondary: '280 32.6% 17.5%',
      secondaryForeground: '280 40% 98%',
      
      muted: '280 32.6% 17.5%',
      mutedForeground: '280 20.2% 65.1%',
      
      accentForeground: '280 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '280 40% 98%',
      
      border: '280 32.6% 17.5%',
      input: '280 32.6% 17.5%',
      ring: '270 85% 60%',
    },
  },
  
  {
    id: 'green-nature',
    name: 'Green Nature',
    description: 'Fresh and calming green vibes',
    light: {
      background: '140 15% 97%',
      foreground: '140 84% 4.9%',
      surface: '140 20% 98%',
      
      primary: '145 75% 40%',
      primaryLight: '145 75% 50%',
      primaryDark: '145 75% 30%',
      accent: '165 85% 40%',
      accentLight: '165 85% 50%',
      
      card: '140 20% 99%',
      cardForeground: '140 84% 4.9%',
      cardGlass: '140 20% 99% / 0.7',
      
      popover: '140 20% 99%',
      popoverForeground: '140 84% 4.9%',
      
      primaryForeground: '140 40% 98%',
      secondary: '140 40% 96.1%',
      secondaryForeground: '140 47.4% 11.2%',
      
      muted: '140 40% 96.1%',
      mutedForeground: '140 16.3% 46.9%',
      
      accentForeground: '140 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '140 40% 98%',
      
      border: '140 31.8% 91.4%',
      input: '140 31.8% 91.4%',
      ring: '145 75% 40%',
    },
    dark: {
      background: '140 84% 4.9%',
      foreground: '140 40% 98%',
      surface: '140 15% 8%',
      
      primary: '145 75% 50%',
      primaryLight: '145 75% 60%',
      primaryDark: '145 75% 40%',
      accent: '165 85% 50%',
      accentLight: '165 85% 60%',
      
      card: '140 84% 4.9%',
      cardForeground: '140 40% 98%',
      cardGlass: '140 15% 10% / 0.6',
      
      popover: '140 84% 4.9%',
      popoverForeground: '140 40% 98%',
      
      primaryForeground: '140 47.4% 11.2%',
      secondary: '140 32.6% 17.5%',
      secondaryForeground: '140 40% 98%',
      
      muted: '140 32.6% 17.5%',
      mutedForeground: '140 20.2% 65.1%',
      
      accentForeground: '140 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '140 40% 98%',
      
      border: '140 32.6% 17.5%',
      input: '140 32.6% 17.5%',
      ring: '145 75% 50%',
    },
  },
  
  {
    id: 'orange-sunset',
    name: 'Orange Sunset',
    description: 'Warm and energetic sunset colors',
    light: {
      background: '35 15% 97%',
      foreground: '35 84% 4.9%',
      surface: '35 20% 98%',
      
      primary: '25 95% 50%',
      primaryLight: '25 95% 60%',
      primaryDark: '25 95% 40%',
      accent: '15 100% 55%',
      accentLight: '15 100% 65%',
      
      card: '35 20% 99%',
      cardForeground: '35 84% 4.9%',
      cardGlass: '35 20% 99% / 0.7',
      
      popover: '35 20% 99%',
      popoverForeground: '35 84% 4.9%',
      
      primaryForeground: '35 40% 98%',
      secondary: '35 40% 96.1%',
      secondaryForeground: '35 47.4% 11.2%',
      
      muted: '35 40% 96.1%',
      mutedForeground: '35 16.3% 46.9%',
      
      accentForeground: '35 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '35 40% 98%',
      
      border: '35 31.8% 91.4%',
      input: '35 31.8% 91.4%',
      ring: '25 95% 50%',
    },
    dark: {
      background: '35 84% 4.9%',
      foreground: '35 40% 98%',
      surface: '35 15% 8%',
      
      primary: '25 95% 55%',
      primaryLight: '25 95% 65%',
      primaryDark: '25 95% 45%',
      accent: '15 100% 60%',
      accentLight: '15 100% 70%',
      
      card: '35 84% 4.9%',
      cardForeground: '35 40% 98%',
      cardGlass: '35 15% 10% / 0.6',
      
      popover: '35 84% 4.9%',
      popoverForeground: '35 40% 98%',
      
      primaryForeground: '35 47.4% 11.2%',
      secondary: '35 32.6% 17.5%',
      secondaryForeground: '35 40% 98%',
      
      muted: '35 32.6% 17.5%',
      mutedForeground: '35 20.2% 65.1%',
      
      accentForeground: '35 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '35 40% 98%',
      
      border: '35 32.6% 17.5%',
      input: '35 32.6% 17.5%',
      ring: '25 95% 55%',
    },
  },
  
  {
    id: 'pink-creative',
    name: 'Pink Creative',
    description: 'Bold and creative pink aesthetic',
    light: {
      background: '330 15% 97%',
      foreground: '330 84% 4.9%',
      surface: '330 20% 98%',
      
      primary: '330 85% 50%',
      primaryLight: '330 85% 60%',
      primaryDark: '330 85% 40%',
      accent: '310 100% 50%',
      accentLight: '310 100% 60%',
      
      card: '330 20% 99%',
      cardForeground: '330 84% 4.9%',
      cardGlass: '330 20% 99% / 0.7',
      
      popover: '330 20% 99%',
      popoverForeground: '330 84% 4.9%',
      
      primaryForeground: '330 40% 98%',
      secondary: '330 40% 96.1%',
      secondaryForeground: '330 47.4% 11.2%',
      
      muted: '330 40% 96.1%',
      mutedForeground: '330 16.3% 46.9%',
      
      accentForeground: '330 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '330 40% 98%',
      
      border: '330 31.8% 91.4%',
      input: '330 31.8% 91.4%',
      ring: '330 85% 50%',
    },
    dark: {
      background: '330 84% 4.9%',
      foreground: '330 40% 98%',
      surface: '330 15% 8%',
      
      primary: '330 85% 55%',
      primaryLight: '330 85% 65%',
      primaryDark: '330 85% 45%',
      accent: '310 100% 55%',
      accentLight: '310 100% 65%',
      
      card: '330 84% 4.9%',
      cardForeground: '330 40% 98%',
      cardGlass: '330 15% 10% / 0.6',
      
      popover: '330 84% 4.9%',
      popoverForeground: '330 40% 98%',
      
      primaryForeground: '330 47.4% 11.2%',
      secondary: '330 32.6% 17.5%',
      secondaryForeground: '330 40% 98%',
      
      muted: '330 32.6% 17.5%',
      mutedForeground: '330 20.2% 65.1%',
      
      accentForeground: '330 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '330 40% 98%',
      
      border: '330 32.6% 17.5%',
      input: '330 32.6% 17.5%',
      ring: '330 85% 55%',
    },
  },
  
  {
    id: 'red-power',
    name: 'Red Power',
    description: 'Strong and energetic red theme',
    light: {
      background: '0 15% 97%',
      foreground: '0 84% 4.9%',
      surface: '0 20% 98%',
      
      primary: '355 85% 50%',
      primaryLight: '355 85% 60%',
      primaryDark: '355 85% 40%',
      accent: '10 100% 50%',
      accentLight: '10 100% 60%',
      
      card: '0 20% 99%',
      cardForeground: '0 84% 4.9%',
      cardGlass: '0 20% 99% / 0.7',
      
      popover: '0 20% 99%',
      popoverForeground: '0 84% 4.9%',
      
      primaryForeground: '0 40% 98%',
      secondary: '0 40% 96.1%',
      secondaryForeground: '0 47.4% 11.2%',
      
      muted: '0 40% 96.1%',
      mutedForeground: '0 16.3% 46.9%',
      
      accentForeground: '0 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '0 40% 98%',
      
      border: '0 31.8% 91.4%',
      input: '0 31.8% 91.4%',
      ring: '355 85% 50%',
    },
    dark: {
      background: '0 84% 4.9%',
      foreground: '0 40% 98%',
      surface: '0 15% 8%',
      
      primary: '355 85% 55%',
      primaryLight: '355 85% 65%',
      primaryDark: '355 85% 45%',
      accent: '10 100% 55%',
      accentLight: '10 100% 65%',
      
      card: '0 84% 4.9%',
      cardForeground: '0 40% 98%',
      cardGlass: '0 15% 10% / 0.6',
      
      popover: '0 84% 4.9%',
      popoverForeground: '0 40% 98%',
      
      primaryForeground: '0 47.4% 11.2%',
      secondary: '0 32.6% 17.5%',
      secondaryForeground: '0 40% 98%',
      
      muted: '0 32.6% 17.5%',
      mutedForeground: '0 20.2% 65.1%',
      
      accentForeground: '0 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '0 40% 98%',
      
      border: '0 32.6% 17.5%',
      input: '0 32.6% 17.5%',
      ring: '355 85% 55%',
    },
  },
  
  {
    id: 'teal-ocean',
    name: 'Teal Ocean',
    description: 'Calm and sophisticated ocean blue',
    light: {
      background: '180 15% 97%',
      foreground: '180 84% 4.9%',
      surface: '180 20% 98%',
      
      primary: '175 70% 40%',
      primaryLight: '175 70% 50%',
      primaryDark: '175 70% 30%',
      accent: '190 80% 40%',
      accentLight: '190 80% 50%',
      
      card: '180 20% 99%',
      cardForeground: '180 84% 4.9%',
      cardGlass: '180 20% 99% / 0.7',
      
      popover: '180 20% 99%',
      popoverForeground: '180 84% 4.9%',
      
      primaryForeground: '180 40% 98%',
      secondary: '180 40% 96.1%',
      secondaryForeground: '180 47.4% 11.2%',
      
      muted: '180 40% 96.1%',
      mutedForeground: '180 16.3% 46.9%',
      
      accentForeground: '180 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '180 40% 98%',
      
      border: '180 31.8% 91.4%',
      input: '180 31.8% 91.4%',
      ring: '175 70% 40%',
    },
    dark: {
      background: '180 84% 4.9%',
      foreground: '180 40% 98%',
      surface: '180 15% 8%',
      
      primary: '175 70% 50%',
      primaryLight: '175 70% 60%',
      primaryDark: '175 70% 40%',
      accent: '190 80% 50%',
      accentLight: '190 80% 60%',
      
      card: '180 84% 4.9%',
      cardForeground: '180 40% 98%',
      cardGlass: '180 15% 10% / 0.6',
      
      popover: '180 84% 4.9%',
      popoverForeground: '180 40% 98%',
      
      primaryForeground: '180 47.4% 11.2%',
      secondary: '180 32.6% 17.5%',
      secondaryForeground: '180 40% 98%',
      
      muted: '180 32.6% 17.5%',
      mutedForeground: '180 20.2% 65.1%',
      
      accentForeground: '180 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '180 40% 98%',
      
      border: '180 32.6% 17.5%',
      input: '180 32.6% 17.5%',
      ring: '175 70% 50%',
    },
  },
  
  {
    id: 'amber-warmth',
    name: 'Amber Warmth',
    description: 'Cozy and warm amber tones',
    light: {
      background: '45 15% 97%',
      foreground: '45 84% 4.9%',
      surface: '45 20% 98%',
      
      primary: '38 92% 50%',
      primaryLight: '38 92% 60%',
      primaryDark: '38 92% 40%',
      accent: '48 100% 50%',
      accentLight: '48 100% 60%',
      
      card: '45 20% 99%',
      cardForeground: '45 84% 4.9%',
      cardGlass: '45 20% 99% / 0.7',
      
      popover: '45 20% 99%',
      popoverForeground: '45 84% 4.9%',
      
      primaryForeground: '45 40% 98%',
      secondary: '45 40% 96.1%',
      secondaryForeground: '45 47.4% 11.2%',
      
      muted: '45 40% 96.1%',
      mutedForeground: '45 16.3% 46.9%',
      
      accentForeground: '45 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '45 40% 98%',
      
      border: '45 31.8% 91.4%',
      input: '45 31.8% 91.4%',
      ring: '38 92% 50%',
    },
    dark: {
      background: '45 84% 4.9%',
      foreground: '45 40% 98%',
      surface: '45 15% 8%',
      
      primary: '38 92% 55%',
      primaryLight: '38 92% 65%',
      primaryDark: '38 92% 45%',
      accent: '48 100% 55%',
      accentLight: '48 100% 65%',
      
      card: '45 84% 4.9%',
      cardForeground: '45 40% 98%',
      cardGlass: '45 15% 10% / 0.6',
      
      popover: '45 84% 4.9%',
      popoverForeground: '45 40% 98%',
      
      primaryForeground: '45 47.4% 11.2%',
      secondary: '45 32.6% 17.5%',
      secondaryForeground: '45 40% 98%',
      
      muted: '45 32.6% 17.5%',
      mutedForeground: '45 20.2% 65.1%',
      
      accentForeground: '45 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '45 40% 98%',
      
      border: '45 32.6% 17.5%',
      input: '45 32.6% 17.5%',
      ring: '38 92% 55%',
    },
  },
  
  {
    id: 'indigo-deep',
    name: 'Indigo Deep',
    description: 'Deep and mysterious indigo',
    light: {
      background: '240 15% 97%',
      foreground: '240 84% 4.9%',
      surface: '240 20% 98%',
      
      primary: '243 75% 50%',
      primaryLight: '243 75% 60%',
      primaryDark: '243 75% 40%',
      accent: '250 85% 50%',
      accentLight: '250 85% 60%',
      
      card: '240 20% 99%',
      cardForeground: '240 84% 4.9%',
      cardGlass: '240 20% 99% / 0.7',
      
      popover: '240 20% 99%',
      popoverForeground: '240 84% 4.9%',
      
      primaryForeground: '240 40% 98%',
      secondary: '240 40% 96.1%',
      secondaryForeground: '240 47.4% 11.2%',
      
      muted: '240 40% 96.1%',
      mutedForeground: '240 16.3% 46.9%',
      
      accentForeground: '240 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '240 40% 98%',
      
      border: '240 31.8% 91.4%',
      input: '240 31.8% 91.4%',
      ring: '243 75% 50%',
    },
    dark: {
      background: '240 84% 4.9%',
      foreground: '240 40% 98%',
      surface: '240 15% 8%',
      
      primary: '243 75% 58%',
      primaryLight: '243 75% 68%',
      primaryDark: '243 75% 48%',
      accent: '250 85% 58%',
      accentLight: '250 85% 68%',
      
      card: '240 84% 4.9%',
      cardForeground: '240 40% 98%',
      cardGlass: '240 15% 10% / 0.6',
      
      popover: '240 84% 4.9%',
      popoverForeground: '240 40% 98%',
      
      primaryForeground: '240 47.4% 11.2%',
      secondary: '240 32.6% 17.5%',
      secondaryForeground: '240 40% 98%',
      
      muted: '240 32.6% 17.5%',
      mutedForeground: '240 20.2% 65.1%',
      
      accentForeground: '240 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '240 40% 98%',
      
      border: '240 32.6% 17.5%',
      input: '240 32.6% 17.5%',
      ring: '243 75% 58%',
    },
  },
  
  {
    id: 'cyan-fresh',
    name: 'Cyan Fresh',
    description: 'Fresh and modern cyan',
    light: {
      background: '190 15% 97%',
      foreground: '190 84% 4.9%',
      surface: '190 20% 98%',
      
      primary: '188 95% 42%',
      primaryLight: '188 95% 52%',
      primaryDark: '188 95% 32%',
      accent: '185 100% 40%',
      accentLight: '185 100% 50%',
      
      card: '190 20% 99%',
      cardForeground: '190 84% 4.9%',
      cardGlass: '190 20% 99% / 0.7',
      
      popover: '190 20% 99%',
      popoverForeground: '190 84% 4.9%',
      
      primaryForeground: '190 40% 98%',
      secondary: '190 40% 96.1%',
      secondaryForeground: '190 47.4% 11.2%',
      
      muted: '190 40% 96.1%',
      mutedForeground: '190 16.3% 46.9%',
      
      accentForeground: '190 47.4% 11.2%',
      
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '190 40% 98%',
      
      border: '190 31.8% 91.4%',
      input: '190 31.8% 91.4%',
      ring: '188 95% 42%',
    },
    dark: {
      background: '190 84% 4.9%',
      foreground: '190 40% 98%',
      surface: '190 15% 8%',
      
      primary: '188 95% 50%',
      primaryLight: '188 95% 60%',
      primaryDark: '188 95% 40%',
      accent: '185 100% 48%',
      accentLight: '185 100% 58%',
      
      card: '190 84% 4.9%',
      cardForeground: '190 40% 98%',
      cardGlass: '190 15% 10% / 0.6',
      
      popover: '190 84% 4.9%',
      popoverForeground: '190 40% 98%',
      
      primaryForeground: '190 47.4% 11.2%',
      secondary: '190 32.6% 17.5%',
      secondaryForeground: '190 40% 98%',
      
      muted: '190 32.6% 17.5%',
      mutedForeground: '190 20.2% 65.1%',
      
      accentForeground: '190 40% 98%',
      
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '190 40% 98%',
      
      border: '190 32.6% 17.5%',
      input: '190 32.6% 17.5%',
      ring: '188 95% 50%',
    },
  },
];

// Helper function to get a random theme
export const getRandomTheme = (excludeId?: string): Theme => {
  const availableThemes = excludeId 
    ? themes.filter(theme => theme.id !== excludeId)
    : themes;
  
  const randomIndex = Math.floor(Math.random() * availableThemes.length);
  return availableThemes[randomIndex];
};

// Helper function to get theme by ID
export const getThemeById = (id: string): Theme | undefined => {
  return themes.find(theme => theme.id === id);
};

// Default theme
export const DEFAULT_THEME_ID = 'professional-blue';

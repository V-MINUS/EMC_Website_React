import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type ColorMode = 'light' | 'dark';

interface ColorModeContextType {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

interface ColorModeProviderProps {
  children: ReactNode;
  defaultMode?: ColorMode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ 
  children,
  defaultMode = 'dark'
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>(defaultMode);

  // Apply color mode on initial render
  useEffect(() => {
    // Check if user has saved preference
    const savedMode = localStorage.getItem('color-mode') as ColorMode | null;
    
    if (savedMode) {
      setColorMode(savedMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setColorMode('light');
    }
  }, []);

  // Update when colorMode changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
    localStorage.setItem('color-mode', colorMode);
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

// Custom hook to use color mode
export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

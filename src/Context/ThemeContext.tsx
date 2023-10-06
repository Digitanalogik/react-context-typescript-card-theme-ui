import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

interface ThemeContextData {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: 'default',
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'default';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => useContext(ThemeContext);
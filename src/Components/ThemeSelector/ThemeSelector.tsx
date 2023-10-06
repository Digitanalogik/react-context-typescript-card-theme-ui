import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

type ThemeOption = 'default' | 'nature' | 'pastel' | 'stable1' | 'stable2' | 'stars' | 'winter';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newTheme = event.target.value as ThemeOption;
    setTheme(newTheme);
  }

  return (
    <select value={theme} onChange={handleThemeChange}>
      <option value="default">Default</option>
      <option value="nature">Nature</option>
      <option value="pastel">Pastel</option>
      <option value="stable1">Stable 1</option>
      <option value="stable2">Stable 2</option>
      <option value="stars">Stars</option>
      <option value="winter">Winter</option>
    </select>
  );
};

export default ThemeSelector;
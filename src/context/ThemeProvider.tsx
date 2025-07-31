import { ThemeContext } from './theme';
import { useThemeProvider } from './useThemeProvider';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeContext = useThemeProvider();

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}; 
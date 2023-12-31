// @Theme
import { accentColors, palette } from './Palette';
import { animations } from './Animations';
import { breakpoints } from './Breakpoints';
import { getTypography } from './TypographyVariants';
import { spacing } from './Spacing';
import { sizing } from './Sizing';

// @Types
import { ThemeType } from './Theme.types';

const getTheme = (colorTheme: 'dark' | 'light'): ThemeType => {
  return {
    animations,
    breakpoints,
    typography: getTypography(colorTheme),
    palette: {
      ...palette[colorTheme],
      accent: accentColors[0],
    },
    sizing,
    spacing,
  };
};

export default getTheme;

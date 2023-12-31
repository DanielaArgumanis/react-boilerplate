import { useState } from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@emotion/react';

// @Components
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

// @Styles
import {
  BodyContainer,
  MainContainer,
  MainLayout,
} from '../Layout/Layout.styles';

// @Theme
import getTheme from '@theme/Theme';

const Layout = () => {
  const [colorTheme, setColorTheme] = useState<'light' | 'dark'>('dark');
  const theme = getTheme(colorTheme);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainContainer>
          <Navbar colorTheme={colorTheme} setColorTheme={setColorTheme} />
          <BodyContainer>
            <Outlet />
          </BodyContainer>
          <Footer />
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;

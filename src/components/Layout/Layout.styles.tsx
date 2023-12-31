import styled from '@emotion/styled';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

export const MainLayout = styled('div')`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background};
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const MainContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(2)};
`;

export const BodyContainer = styled('div')`
  height: ${(props) =>
    `calc(100% - ${props.theme.sizing.navbar} - ${props.theme.sizing.footer})`};
  padding: ${(props) => `${props.theme.spacing(2)} 0`};

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.mobileL, Breakpoint.tablet)} {
    padding: ${(props) => `${props.theme.spacing(1)} 0`};
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    height: ${(props) =>
      `calc(100% - ${props.theme.sizing.navbarMobile} - ${props.theme.sizing.footerMobile})`};
  }
`;

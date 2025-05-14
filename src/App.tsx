import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from './theme';
import AppRoutes from './routes/AppRoutes';
import DocumentTitle from './components/ui/DocumentTitle';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <DocumentTitle />
        <AppContainer>
          <AppRoutes />
        </AppContainer>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;

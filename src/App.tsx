import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';
import AppRoutes from './routes/AppRoutes';
import DocumentTitle from './components/ui/DocumentTitle';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <DocumentTitle />
          <div style={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
            <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
              <AppRoutes />
            </main>
          </div>
        </BrowserRouter>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;

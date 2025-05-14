import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import DocumentTitle from './components/ui/DocumentTitle';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <div style={{ minHeight: '100vh' }}>
        <main style={{ padding: '20px' }}>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

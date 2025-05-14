import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/ui/navigation/Navigation';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout; 
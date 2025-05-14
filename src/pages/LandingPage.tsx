import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <main>
      <header>
        <h1>Welcome to Cloud Creations</h1>
        <p>Your one-stop shop for cloud services</p>
      </header>

      <section>
        <h2>Get Started</h2>
        <p>Browse our selection of cloud services and find the perfect plan for your needs.</p>
        <Link to="/products">View Products</Link>
      </section>
    </main>
  );
};

export default LandingPage; 
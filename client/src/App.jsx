import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FrontendDashboard from './pages/FrontendDashboard';
import BackendDashboard from './pages/BackendDashboard';
import DatabaseDashboard from './pages/DatabaseDashboard';
import IntegrationDashboard from './pages/IntegrationDashboard';
import ConceptDetail from './pages/ConceptDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Private/Internal Routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="frontend" element={<FrontendDashboard />} />
          <Route path="backend" element={<BackendDashboard />} />
          <Route path="database" element={<DatabaseDashboard />} />
          <Route path="integration" element={<IntegrationDashboard />} />
          <Route path="deployment" element={<IntegrationDashboard />} />
          <Route path="concept/:id" element={<ConceptDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Comparison from './pages/Comparison';
import Predictor from './pages/Predictor';
import Auth from './pages/Auth';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username) => {
    // In a real app, you would validate credentials or a token here
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'comparison':
        return <Comparison />;
      case 'predictor':
        return <Predictor />;
      case 'info':
        return (
          <div className="info-page animate-fade-in">
            <h1>About <span className="gradient-text">EDU Predictor</span></h1>
            <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
              This platform evaluates multiple machine learning models to predict student academic performance. 
              By analyzing behavioral data and historical grades, educators can identify students who may 
              need additional support.
            </p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
      <main className="content-area">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;

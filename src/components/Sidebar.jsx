import React from 'react';
import { LayoutDashboard, BarChart3, Calculator, Info, LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { id: 'comparison', icon: <BarChart3 size={20} />, label: 'Model Comparison' },
    { id: 'predictor', icon: <Calculator size={20} />, label: 'Predictor' },
    { id: 'info', icon: <Info size={20} />, label: 'Info' },
  ];

  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-header">
        <div className="logo-icon grad-bg">🎓</div>
        <h2 className="gradient-text">EduPredict</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <button className="nav-item logout" onClick={onLogout}>
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

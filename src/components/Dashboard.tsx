import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Dashboard.css';

// Placeholder components for each tab
const Overview = () => <div className="tab-content">Overview Content</div>;
const Transactions = () => <div className="tab-content">Transactions Content</div>;
const Analytics = () => <div className="tab-content">Analytics Content</div>;
const Reports = () => <div className="tab-content">Reports Content</div>;
const Settings = () => <div className="tab-content">Settings Content</div>;

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const tabs = [
    { id: 'overview', label: 'Overview', component: Overview },
    { id: 'transactions', label: 'Transactions', component: Transactions },
    { id: 'analytics', label: 'Analytics', component: Analytics },
    { id: 'reports', label: 'Reports', component: Reports },
    { id: 'settings', label: 'Settings', component: Settings },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || Overview;

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <nav className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <main className="main-content">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 
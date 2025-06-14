import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
import DashboardTab from './DashboardTab';
import CurrencyConfig from './CurrencyConfig';
import './Dashboard.css';

// Placeholder components for other tabs
const GroupsTab = () => <div className="tab-content">Groups Management Content</div>;
const PayrollTab = () => <div className="tab-content">Payroll Management Content</div>;
const LiveUpdatesTab = () => <div className="tab-content">Live Updates Content</div>;

const SettingsTab: React.FC = () => (
  <div className="tab-content">
    <CurrencyConfig />
  </div>
);

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  // const navigate = useNavigate();

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', component: DashboardTab },
    { id: 'groups', label: 'Groups', component: GroupsTab },
    { id: 'payroll', label: 'Payroll', component: PayrollTab },
    { id: 'live-updates', label: 'Live Updates', component: LiveUpdatesTab },
    { id: 'settings', label: 'Settings', component: SettingsTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || DashboardTab;

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
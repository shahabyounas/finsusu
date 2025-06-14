import React from 'react';
import './DashboardTab.css';

interface InfoCardProps {
  title: string;
  value: string | number;
  icon?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => (
  <div className="info-card">
    <div className="info-card-content">
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-value">{value}</p>
    </div>
    {icon && <div className="info-card-icon">{icon}</div>}
  </div>
);

const DashboardTab: React.FC = () => {
  const dashboardData = {
    activeGroups: 12,
    monthlyContributions: '₦2,500,000',
    totalDeduction: '₦1,800,000',
    nextPayout: '₦700,000'
  };

  return (
    <div className="dashboard-tab">
      <div className="info-cards-container">
        <InfoCard 
          title="Active Groups" 
          value={dashboardData.activeGroups}
          icon="👥"
        />
        <InfoCard 
          title="Monthly Contributions" 
          value={dashboardData.monthlyContributions}
          icon="💰"
        />
        <InfoCard 
          title="Total Deduction" 
          value={dashboardData.totalDeduction}
          icon="📊"
        />
        <InfoCard 
          title="Next Payout" 
          value={dashboardData.nextPayout}
          icon="📅"
        />
      </div>
    </div>
  );
};

export default DashboardTab; 
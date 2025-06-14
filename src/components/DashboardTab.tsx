import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardTab.css';

interface InfoCardProps {
  title: string;
  value: string | number;
  icon?: string;
}

interface StatusCardProps {
  title: string;
  description: string;
  status: 'active' | 'pending' | 'completed';
  members: {
    current: number;
    total: number;
  };
  monthlyDeposit: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => (
  <div className="info-card">
    <div className="info-card-header">
      <h3 className="info-card-title">{title}</h3>
      {icon && <div className="info-card-icon">{icon}</div>}
    </div>
    <p className="info-card-value">{value}</p>
  </div>
);

const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  description, 
  status, 
  members, 
  monthlyDeposit 
}) => {
  const navigate = useNavigate();

  const handleManageSlots = () => {
    navigate('/manage-slots');
  };

  return (
    <div className="status-card">
      <div className="status-card-header">
        <div className="status-card-title-section">
          <h2 className="status-card-title">{title}</h2>
          <p className="status-card-description">{description}</p>
        </div>
        <button className={`status-button ${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      </div>
      <div className="status-card-metrics">
        <div className="metric-item">
          <div className="metric-value">{members.current} of {members.total}</div>
          <span className="metric-tag">Members</span>
        </div>
        <div className="metric-item">
          <div className="metric-value">{monthlyDeposit}</div>
          <span className="metric-tag">Monthly</span>
        </div>
        <button className="manage-slots-button" onClick={handleManageSlots}>
          Manage Slots
        </button>
      </div>
    </div>
  );
};

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

      <div className="status-cards-container">
        <StatusCard 
          title="Tech Team Saving"
          description="Team-based savings pool for technology department"
          status="active"
          members={{ current: 6, total: 8 }}
          monthlyDeposit="$200"
        />
        <StatusCard 
          title="Marketing Pool"
          description="Collaborative savings for marketing initiatives"
          status="pending"
          members={{ current: 4, total: 6 }}
          monthlyDeposit="$150"
        />
      </div>
    </div>
  );
};

export default DashboardTab; 
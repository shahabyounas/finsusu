import React from 'react';
import './PayrollTab.css';

const PayrollTab: React.FC = () => {
  return (
    <div className="payroll-tab">
      {/* Payroll Status Card */}
      <div className="payroll-card">
        <div className="payroll-card-left">
          <span className="payroll-card-title">Payroll Status</span>
        </div>
        <div className="payroll-card-right">
          <span className="status-badge active">Active</span>
        </div>
      </div>

      {/* Deduction Date Card */}
      <div className="payroll-card">
        <div className="payroll-card-left">
          <span className="payroll-card-title">Deduction Date</span>
          <div className="payroll-card-date">14/06/2025</div>
        </div>
        <div className="payroll-card-right">
          <div className="payroll-card-label">Monthly Deduction Rate</div>
          <div className="payroll-card-amount">$500</div>
        </div>
      </div>

      {/* Deduction Breakdown Card */}
      <div className="payroll-card breakdown-card">
        <div className="payroll-card-title">Deduction Breakdown</div>
        <div className="breakdown-list">
          <div className="breakdown-row">
            <span>Marketing Pool</span>
            <span>$200</span>
          </div>
          <div className="breakdown-row">
            <span>Subscription Fee</span>
            <span>$50</span>
          </div>
          <div className="breakdown-row total">
            <span>Total</span>
            <span>$250</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollTab; 
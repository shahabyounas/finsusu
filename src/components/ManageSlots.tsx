import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './ManageSlots.css';

const groupDetails = {
  name: 'Tech Team Savings',
  status: 'Active',
  members: 6,
  contribution: '$500/month',
  startDate: '14/06/2025',
  endDate: '14/12/2025',
  totalAmount: '$3000',
  cycleLength: '6 months',
};

const slots = [
  { id: 1, month: 'June 2025', status: 'your', badge: 'Your Slot' },
  { id: 2, month: 'July 2025', status: 'number', badge: '2' },
  { id: 3, month: 'August 2025', status: 'number', badge: '3' },
  { id: 4, month: 'September 2025', status: 'join', badge: 'Join' },
  { id: 5, month: 'October 2025', status: 'join', badge: 'Join' },
  { id: 6, month: 'November 2025', status: 'join', badge: 'Join' },
];

const ManageSlots: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(1);

  return (
    <div className="manage-slots-page">
      <Header />
      <div className="manage-slots-topbar">
        <button className="back-arrow" onClick={() => navigate('/dashboard')}>
          &#8592;
        </button>
        <span className="group-title">{groupDetails.name}</span>
        <span className="status-badge active">{groupDetails.status}</span>
      </div>
      <div className="manage-slots-columns">
        <div className="group-details-card">
          <h3>Group Details</h3>
          <div className="details-grid">
            <div>
              <div className="details-label">Members</div>
              <div className="details-value">{groupDetails.members}</div>
            </div>
            <div>
              <div className="details-label">Contribution</div>
              <div className="details-value">{groupDetails.contribution}</div>
            </div>
            <div>
              <div className="details-label">Start Date</div>
              <div className="details-value">{groupDetails.startDate}</div>
            </div>
            <div>
              <div className="details-label">End Date</div>
              <div className="details-value">{groupDetails.endDate}</div>
            </div>
            <div>
              <div className="details-label">Total Pool Amount</div>
              <div className="details-value">{groupDetails.totalAmount}</div>
            </div>
            <div>
              <div className="details-label">Cycle Length</div>
              <div className="details-value">{groupDetails.cycleLength}</div>
            </div>
          </div>
        </div>
        <div className="slot-schedule-card">
          <h3>Slot Schedule</h3>
          <div className="slot-schedule-sub">Select an available slot to join this group</div>
          <div className="slot-list">
            {slots.map(slot => (
              <div
                key={slot.id}
                className={`slot-row${selectedSlot === slot.id ? ' selected' : ''}`}
                onClick={() => setSelectedSlot(slot.id)}
              >
                <div className="slot-number">{slot.id}</div>
                <div className="slot-info">
                  <div className="slot-title">Slot {slot.id}</div>
                  <div className="slot-month">{slot.month}</div>
                </div>
                <div className={`slot-badge ${slot.status}`}>{slot.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSlots; 
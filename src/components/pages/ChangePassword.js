import React from 'react';
import './ChangePassword.css';

const ChangePassword = ({ isCollapsed }) => {
  return (
    <div className={`container change-password-container ${isCollapsed ? 'content-moved-12' : ''}`}>
      <h1>Change Password</h1>
      <div className="password-fields">
        <div className="mb-3">
          <label htmlFor="current-password" className="form-label">Current Password</label>
          <input type="password" className="form-control" id="current-password" placeholder="Enter current password" />
        </div>
        <div className="mb-3">
          <label htmlFor="new-password" className="form-label">New Password</label>
          <input type="password" className="form-control" id="new-password" placeholder="Enter new password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirm-password" placeholder="Confirm new password" />
        </div>
      </div>
      <button className="btn btn-primary change-password-button">Change Password</button>
    </div>
  );
};

export default ChangePassword;

import React from "react";

const Dashboard = ({ email, onLogout }) => (
  <div className="dashboard">
    <h2>Welcome, {email}!</h2>
    <p>You've successfully logged in 🚀</p>
    {onLogout && <button onClick={onLogout} className="logout-btn">Log out</button>}
  </div>
);

export default Dashboard;

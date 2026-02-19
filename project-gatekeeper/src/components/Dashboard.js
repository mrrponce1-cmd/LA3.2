import React from "react";

const Dashboard = ({ email }) => (
  <div className="dashboard">
    <h2>Welcome, {email}!</h2>
    <p>You’ve successfully logged in 🚀</p>
  </div>
);

export default Dashboard;

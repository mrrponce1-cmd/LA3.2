import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import "./styles.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return (
    <div className="page">
      {isLoggedIn ? <Dashboard email={userEmail} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;

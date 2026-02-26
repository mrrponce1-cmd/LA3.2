import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email format and password is not empty
    if (!validateEmail(email)) {
      setError(true);
      return;
    }
    if (password.trim() === "") {
      setError(true);
      return;
    }
    onLogin(email);
  };

  return (
    <Card>
      <div className="left">
        <div className="logo">Welcome</div>
        <h1>Project Gatekeeper</h1>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit} noValidate>
          <Input
          type="email"
          placeholder="Email or phone"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
          error={error && !validateEmail(email)}   // only highlight email if invalid
          />
          <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          error={error && password.trim() === ""} // only highlight password if empty
          />

          <Button type="submit">Log in</Button>
          <div className="links">
            <a href="#">Forgot email?</a>
          </div>
          {error && <p className="error">Invalid credentials, try again.</p>}
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;

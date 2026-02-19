import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication: password must equal "1234"
    if (password === "1234") {
      onLogin(email);
    } else {
      setError(true);
    }
  };

  return (
    <Card>
      <div className="left">
        <div className="logo">T.I.P.</div>
        <h1>Sign in</h1>
        <p className="sub">to continue</p>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
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

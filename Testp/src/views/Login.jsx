import { useState, useContext } from "react";
import { AppContext } from "../App"; 

function Login() {
  const { setUser, setPage } = useContext(AppContext); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password.length >= 6) {
      setUser({
        name: email.split("@")[0],
        email: email,
      });
      setPage("dashboard");
    } else {
      alert("Please enter email and password (min 6 chars)");
    }
  };

  const handleDemoLogin = () => {
    setUser({
      name: "Demo User",
      email: "demo@skillbridge.com",
    });
    setPage("dashboard");
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="logo-section">
          <img src="/logo.png" alt="SkillBridge Logo" className="logo-img" />
          <h1 className="logo-title">SkillBridge</h1>
          <p className="logo-subtitle">Learn, Manage, Succeed</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label className="login-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="login-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-btn signin-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">or</span>
          <div className="divider-line"></div>
        </div>

        <button onClick={handleDemoLogin} className="demo-btn">
          Try Demo Account
        </button>

        <p className="login-footer-text">
          Demo credentials: Use any email and password (min 6 chars) to get started
        </p>
      </div>
    </div>
  );
}

export default Login;

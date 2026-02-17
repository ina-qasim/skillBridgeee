import React, { useContext } from "react";
import { AppContext, ThemeContext } from "../App";

function Navbar({ activePage }) {
  const { user, setUser, setPage } = useContext(AppContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <div className="main">
      <div className="nav-container">
        <div
          className="nav-logo-section"
          onClick={() => setPage("dashboard")}
        >
          <img
            src="/logo.png"
            alt="SkillBridge Logo"
            className="nav-logo-img"
          />
        </div>

        <div className="nav-items">
          <li
            className={activePage === "dashboard" ? "nav-active" : ""}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={activePage === "courses" ? "nav-active" : ""}
            onClick={() => setPage("courses")}
          >
            Courses
          </li>

          <li
            className={activePage === "tasks" ? "nav-active" : ""}
            onClick={() => setPage("tasks")}
          >
            Tasks
          </li>

          <div className="nav-user-profile">
            <h4>{user ? user.name : "Demo User"}</h4>

            <div className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

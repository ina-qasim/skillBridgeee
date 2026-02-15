import React from 'react'

function Navbar({ username, email, onNavigate, activePage }) {
  return (
    <div className='main'>
      <div className='nav-content'>
        <div className="nav-container">
          <div
            className="nav-logo-section"
            onClick={() => onNavigate('dashboard')}
          >
            <img src="/logo.png" alt="SkillBridge Logo" className="nav-logo-img" />
          </div>

          <div className='nav-items'>
            <li
              className={activePage === 'dashboard' ? 'nav-active' : ''}
              onClick={() => onNavigate('dashboard')}
            >
              Dashboard
            </li>

            <li
              className={activePage === 'courses' ? 'nav-active' : ''}
              onClick={() => onNavigate('courses')}
            >
              Courses
            </li>

            <li
              className={activePage === 'tasks' ? 'nav-active' : ''}
              onClick={() => onNavigate('tasks')}
            >
              Tasks
            </li>

            {/* ✅ REAL USER INFO */}
            <div className='nav-user-profile'>
              <h3>
                {username}
                <p>{email}</p>
              </h3>

              <button onClick={() => onNavigate("login")}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

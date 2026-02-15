function Header({ username }) {
  return (
    <div className="dashboard-info-container">
      <h2 className="dashboard-info-title">
        Welcome back, <span className="dashboard-info-username">{username}</span>
      </h2>
      <p className="dashboard-info-subtitle">
        Continue your learning journey and manage your tasks
      </p>
    </div>
  )
}

export default Header

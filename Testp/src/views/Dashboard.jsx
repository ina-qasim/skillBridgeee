import Header from "../components/Header";
import Stats from "../components/Stats";

function Dashboard({ setPage, user, enrolledCourses }) {
  const username = user?.name || "Demo User";

  const statusData = [
    { icon: "📚", name: "Courses Enrolled", numb: enrolledCourses.length, variant: "purple" },
    { icon: "✓", name: "Tasks Completed", numb: "0", variant: "green" },
    { icon: "🔥", name: "Current Streak", numb: "1", variant: "orange" },
    { icon: "📅", name: "Upcoming", numb: "0", variant: "blue" },
  ];

  return (
    <div className="page-container">
      <Header username={username} />

      <div className='stats-grid'>
        {statusData.map((status, index) => (
          <Stats
            key={index}
            icon={status.icon}
            name={status.name}
            numb={status.numb}
            variant={status.variant}
          />
        ))}
      </div>

      <div className="dashboard-section">
        <h2 className="dashboard-title">Your Enrolled Courses</h2>

        {enrolledCourses.length === 0 ? (
          <div className="card empty-card">
            <p className="empty-text">
              You haven't enrolled in any courses yet!
            </p>
            <button
              className="primary-btn browse-btn-large"
              onClick={() => setPage('courses')}
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="courses-grid">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="card course-card-wrapped">
                <img src={course.image} alt={course.title} className="course-image-full" />
                <div className="course-card-content">
                  <h3>{course.title}</h3>
                  <p>{course.instructor}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-bottom">

        <div className="card recent-tasks-card">
          <h3 className="recent-tasks-title">Recent Tasks</h3>
          <div className="divider-horizontal"></div>
        </div>

        <div className="side-actions-container">
          <button className="primary-btn full-width-btn" onClick={() => setPage('courses')}>
            Browse Courses
          </button>

          <button
            className="secondary-btn"
            onClick={() => setPage('tasks')}
          >
            Manage Tasks
          </button>

          <div className="card progress-card">
            <span className="progress-label">Your learning journey</span>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '0%' }}></div>
            </div>
            <span className="progress-percentage-text">0% to next level</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;

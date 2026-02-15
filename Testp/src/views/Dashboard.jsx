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

      {/* Stats Section */}
      <div className="stats-grid">
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

      {/* Enrolled Courses */}
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
          <div className="enrolled-courses-grid">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="card enrolled-course-card">
                {/* Course Image */}
                <div className="hero-image-container">
                  <img src={course.image} alt={course.title} className="hero-image" />
                </div>

                {/* Course Info */}
                <div className="course-info-section">
                  <h3 className="course-title-large">{course.title}</h3>
                  <p className="course-description-text">{course.description}</p>

                  <div className="course-meta-list">
                    <div className="course-meta-item">
                      👨‍🏫 {course.instructor || "Instructor Name"}
                    </div>
                    <div className="course-meta-item">
                      ⭐ {course.rating || "N/A"}
                    </div>
                    <div className="course-meta-item">
                      👥 {course.students || "N/A"}
                    </div>
                    <div className="course-meta-item">
                      ⏱️ {course.duration || "N/A"}
                    </div>
                  </div>

                  <button
                    className="primary-btn view-course-btn"
                    onClick={() => setPage('Course')}
                  >
                    View Full Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

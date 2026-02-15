import { useState } from "react";
import Navbar from "./components/Navbar";
import Courses from "./views/Courses";
import Dashboard from "./views/Dashboard";
import Tasks from "./views/Tasks";
import Login from "./views/Login";
import Course from "./views/Course";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Add course to enrolled list
  const handleEnroll = (course) => {
    setEnrolledCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  // Set selected course and navigate to Course page
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setPage("Course"); // must match the App.jsx render
  };

  return (
    <main className="container">
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}

      {page === "dashboard" && (
        <>
          <Navbar
            username={user ? user.name : "Demo User"}
            onNavigate={setPage}
            activePage={page}
          />
          <Dashboard
            setPage={setPage}
            user={user}
            enrolledCourses={enrolledCourses}
          />
        </>
      )}

      {page === "courses" && (
        <>
          <Navbar
            username={user ? user.name : "Demo User"}
            onNavigate={setPage}
            activePage={page}
          />
          <Courses
            onCourseClick={handleCourseClick}
            onEnroll={(course) => {
              handleEnroll(course);
              handleCourseClick(course);
            }}
          />
        </>
      )}

      {page === "Course" && (
        <>
          <Navbar
            username={user ? user.name : "Demo User"}
            onNavigate={setPage}
            activePage={page}
          />
          {selectedCourse ? (
            <Course
              course={selectedCourse}
              setPage={setPage}
              onEnroll={handleEnroll}
            />
          ) : (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              No course selected.
              <button
                className="primary-btn"
                onClick={() => setPage("courses")}
              >
                Back to Courses
              </button>
            </div>
          )}
        </>
      )}

      {page === "tasks" && (
        <>
          <Navbar
            username={user ? user.name : "Demo User"}
            onNavigate={setPage}
            activePage={page}
          />
          <Tasks />
        </>
      )}
    </main>
  );
}

export default App;

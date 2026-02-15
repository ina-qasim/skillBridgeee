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

  const handleEnroll = (course) => {
    setEnrolledCourses((prev) => {
      if (prev.find(c => c.id === course.id)) return prev; // prevent duplicates
      return [...prev, course];
    });
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setPage("course");
  };

  return (
    <main className="container">
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}

      {page === "dashboard" && (
        <>
          <Navbar username={user ? user.name : "Demo User"} onNavigate={setPage} activePage={page} />
          <Dashboard setPage={setPage} user={user} enrolledCourses={enrolledCourses} />
        </>
      )}

      {page === "courses" && (
        <>
          <Navbar username={user ? user.name : "Demo User"} onNavigate={setPage} activePage={page} />
          <Courses setPage={setPage} onCourseClick={handleCourseClick} onEnroll={handleEnroll} />
        </>
      )}

      {page === "course" && (
        <>
          <Navbar username={user ? user.name : "Demo User"} onNavigate={setPage} activePage={page} />
          <Course course={selectedCourse} setPage={setPage} onEnroll={(c) => { handleEnroll(c); setPage("dashboard"); }} />
        </>
      )}

      {page === "tasks" && (
        <>
          <Navbar username={user ? user.name : "Demo User"} onNavigate={setPage} activePage={page} />
          <Tasks />
        </>
      )}
    </main>
  );
}

export default App;

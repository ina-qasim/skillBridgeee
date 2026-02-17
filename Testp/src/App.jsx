import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Courses from "./views/Courses";
import Dashboard from "./views/Dashboard";
import Tasks from "./views/Tasks";
import Login from "./views/Login";
import Course from "./views/Course";

export const ThemeContext = createContext();
export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    setEnrolledCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        page,
        setPage,
        selectedCourse,
        setSelectedCourse,
        enrolledCourses,
        setEnrolledCourses,
        handleEnroll,
      }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme}>
          <main className="container">
            {page === "login" && <Login />}

            {page === "dashboard" && (
              <>
                <Navbar activePage="dashboard" />
                <Dashboard />
              </>
            )}

            {page === "courses" && (
              <>
                <Navbar activePage="courses" />
                <Courses />
              </>
            )}

            {page === "Course" && (
              <>
                <Navbar activePage="Course" />
                <Course />
              </>
            )}

            {page === "tasks" && (
              <>
                <Navbar activePage="tasks" />
                <Tasks />
              </>
            )}
          </main>
        </div>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

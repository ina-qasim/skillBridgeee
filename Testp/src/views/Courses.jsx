import { useState } from "react";

function Courses({ setPage, onCourseClick }) {

  const courses = [
    {
      id: 1,
      title: "React.js Fundamentals",
      category: "web",
      image: "/react-course.jpg",
      instructor: "Sarah Chen",
      duration: "8 weeks",
      students: "2450 students",
      rating: 4.8,
      level: "Beginner",
      description: "Master the basics of React with hands-on projects and real-world examples.",
    },
    {
      id: 2,
      title: "Advanced TypeScript",
      category: "web",
      image: "/typescript-course.jpg",
      instructor: "John Smith",
      duration: "6 weeks",
      students: "1820 students",
      rating: 4.9,
      level: "Advanced",
      description: "Deep dive into TypeScript advanced features and best practices.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "mobile",
      image: "/mobile-app-development.png",
      instructor: "Emma Wilson",
      duration: "12 weeks",
      students: "1640 students",
      rating: 4.7,
      level: "Intermediate",
      description: "Build native mobile apps with React Native from scratch.",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      category: "ai",
      image: "/ai-machine-learning.jpg",
      instructor: "Dr. Michael Lee",
      duration: "10 weeks",
      students: "980 students",
      rating: 4.9,
      level: "Advanced",
      description: "Introduction to AI and ML algorithms with practical implementations.",
    },
    {
      id: 5,
      title: "Data Science 101",
      category: "data",
      image: "/data-science-concept.png",
      instructor: "Lisa Brown",
      duration: "8 weeks",
      students: "2100 students",
      rating: 4.6,
      level: "Beginner",
      description: "Learn data analysis and visualization with Python and popular libraries.",
    },
    {
      id: 6,
      title: "Web Design Mastery",
      category: "web",
      image: "/web-design.jpg",
      instructor: "Alex Martinez",
      duration: "7 weeks",
      students: "1540 students",
      rating: 4.8,
      level: "Intermediate",
      description: "Create beautiful and functional websites with modern design principles.",
    },
  ];

  const categories = ["all", "web", "mobile", "ai", "data"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const getBadgeColor = (level) => {
    switch (level) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#64748b';
    }
  };

  return (
    <div className="page-container">
      <div className="courses-header">
        <h1 className="courses-title">Explore Courses</h1>
        <p className="courses-subtitle">Learn new skills from industry experts</p>
      </div>

      <div className="categories-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="category-btn"
            style={{
              background: selectedCategory === cat ? '#ff7e1d' : '#e2e8f0',
              color: selectedCategory === cat ? 'white' : '#475569',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div
            className="card course-card-wrapped"
            key={course.id}
            onClick={() => onCourseClick(course)}
          >
            <div className="course-image-container">
              <img src={course.image} alt={course.title} className="course-image-full" />
              <div
                className="course-level-badge"
                style={{ background: getBadgeColor(course.level) }}
              >
                {course.level}
              </div>
            </div>

            <div className="course-card-content">
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-description">{course.description}</p>

              <div className="course-details-list">
                <div className="course-detail-item">
                  <span>👨‍🏫</span> {course.instructor}
                </div>
                <div className="course-detail-item">
                  <span>⏱️</span> {course.duration}
                </div>
                <div className="course-detail-item">
                  <span>👥</span> {course.students}
                </div>
              </div>

              <div className="course-card-footer">
                <span className="course-rating-text">{course.rating} ★</span>
                <button
                  className="primary-btn enroll-now-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCourseClick(course);
                  }}
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;



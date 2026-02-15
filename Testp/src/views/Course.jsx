import React, { useState } from 'react';

function Course({ course, setPage, onEnroll }) {
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    if (!course) {
        return (
            <div className="page-container no-course-selection">
                <h2>No course selected</h2>
                <button className="primary-btn" onClick={() => setPage('courses')}>
                    Back to Courses
                </button>
            </div>
        );
    }

    const modules = [
        { title: "Introduction to React", lessons: "5 lessons" },
        { title: "Components & JSX", lessons: "6 lessons" },
        { title: "Hooks Deep Dive", lessons: "8 lessons" },
        { title: "State Management", lessons: "7 lessons" },
        { title: "Routing & Navigation", lessons: "5 lessons" },
        { title: "Building Projects", lessons: "10 lessons" },
    ];

    return (
        <div className="page-container enrolled-page">
            <button onClick={() => setPage('courses')} className="back-btn">
                ← Back to Courses
            </button>

            <div className="enrolled-grid">
                <div>
                    <div className="hero-image-container">
                        <img src={course.image} alt={course.title} className="hero-image" />
                    </div>

                    <div className="card course-info-card">
                        <h1 className="course-title-large">{course.title}</h1>

                        <div className="course-meta-list">
                            <div className="course-meta-item">
                                <span>👨‍🏫</span> {course.instructor || "Instructor Name"}
                            </div>
                            <div className="course-meta-item">⭐ {course.rating}</div>
                            <div className="course-meta-item">👥 {course.students || "0"}</div>
                            <div className="course-meta-item">⏱️ {course.duration || "N/A"}</div>
                        </div>

                        <p className="course-description-text">{course.description}</p>

                        <h3 className="sub-section-title">What you'll learn:</h3>
                        <ul className="learning-list">
                            {["JSX and component fundamentals", "Hooks (useState, useEffect, useContext)", "Props and state management"].map((item, i) => (
                                <li key={i} className="learning-item">
                                    <span className="learning-check">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className="section-title-medium">Modules</h2>
                    <div className="modules-list">
                        {modules.slice(0, 4).map((module, index) => (
                            <div key={index} className="card module-card">
                                <div className="module-number">{index + 1}</div>
                                <div className="module-info">
                                    <h4 className="module-title">{module.title}</h4>
                                    <span className="module-lessons">{module.lessons}</span>
                                </div>
                                <span className="module-play-icon">▶</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="sidebar-sticky">
                    <div className="card" style={{ padding: '20px' }}>
                        <div className="price-tag">$49.99</div>

                        <button
                            className="primary-btn enroll-btn"
                            onClick={() => {
                                setIsEnrolled(!isEnrolled);
                                onEnroll(course);
                            }}
                            style={{
                                background: isEnrolled ? '#00a651' : '#ff7e1d'
                            }}
                        >
                            {isEnrolled ? 'Enrolled' : 'Enroll Now'}
                        </button>

                        <button
                            onClick={() => setIsWishlisted(!isWishlisted)}
                            className="wishlist-btn"
                            style={{
                                background: isWishlisted ? '#e30613' : '#e2e8f0',
                                color: isWishlisted ? 'white' : '#0f172a'
                            }}
                        >
                            {isWishlisted ? 'Remove' : 'Wishlist'}
                        </button>

                        <div className="includes-section">
                            <p className="includes-title">Includes:</p>
                            <ul className="includes-list">
                                <li className="includes-item">✓ Video lessons</li>
                                <li className="includes-item">✓ Coding exercises</li>
                                <li className="includes-item">✓ Certificate</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Course;

import { useEffect, useState } from "react";

function Courses({ onCourseClick, onEnroll }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = ["all", "beauty", "fragrances", "furniture", "groceries"];

  useEffect(() => {
    setLoading(true);

    const url =
      selectedCategory === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  }, [selectedCategory]);

  useEffect(() => {
    const result = products.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  }, [search, products]);

  const getLevel = (rating) => {
    if (rating >= 4.7) return "Advanced";
    if (rating >= 4.3) return "Intermediate";
    return "Beginner";
  };

  const getBadgeColor = (level) => {
    switch (level) {
      case "Beginner":
        return "#4caf50";
      case "Intermediate":
        return "#ff9800";
      case "Advanced":
        return "#f44336";
      default:
        return "#64748b";
    }
  };

  return (
    <div className="page-container">
      <div className="courses-header">
        <h1 className="courses-title">Explore Courses</h1>
        <p className="courses-subtitle">
          Learn new skills from industry experts
        </p>
      </div>

      <div className="categories-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="category-btn"
            style={{
              background: selectedCategory === cat ? "#ff7e1d" : "#e2e8f0",
              color: selectedCategory === cat ? "white" : "#475569",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="courses-grid">
        {loading && <div className="loader">Loading...</div>}

        {!loading &&
          filteredProducts.map((course) => {
            const level = getLevel(course.rating);

            return (
              <div
                className="card course-card-wrapped"
                key={course.id}
                onClick={() => onCourseClick({ ...course, image: course.thumbnail })}
              >
                <div className="course-image-container">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="course-image-full"
                  />
                  <div
                    className="course-level-badge"
                    style={{ background: getBadgeColor(level) }}
                  >
                    {level}
                  </div>
                </div>

                <div className="course-card-content">
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-description">{course.description}</p>

                  <div className="course-card-footer">
                    <span className="course-rating-text">{course.rating} ★</span>

                    <button
                      className="primary-btn enroll-now-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEnroll({ ...course, image: course.thumbnail });
                        onCourseClick({ ...course, image: course.thumbnail });
                      }}
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Courses;

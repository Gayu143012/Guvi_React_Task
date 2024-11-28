import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Allcourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/course.json")
      .then((response) => response.json())
      .then((result) => {
        setCourses(result.data);
      });
  }, []);

  return (
    <div className="container">
      <div
        className="d-flex flex-wrap justify-content-center gap-4"
        style={{ padding: "10px" }}
      >
        {courses.map((course) => (
          <div
            className="card"
            style={{
              width: "18rem", // Fixed card width
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
            key={course.id}
          >
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
              style={{
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">{course.category}</h6>
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">
                <small className="text-muted">By {course.author}</small>
                <br />
                <small className="text-muted">
                  {course.date} • {course.readTime}
                </small>
                <br />
                <small className="text-muted">Views: {course.views}</small>
              </p>
              <Link
                to={`/course/${course.id}`} // Navigate to the dynamic route
                className="btn btn-primary btn-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

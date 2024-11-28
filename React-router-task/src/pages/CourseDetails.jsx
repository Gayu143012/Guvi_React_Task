import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseDetails() {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null); // State to hold the course details

  useEffect(() => {
    // Fetch the course data from JSON
    fetch("http://localhost:5173/course.json")
      .then((response) => response.json())
      .then((result) => {
        const selectedCourse = result.data.find((item) => item.id === parseInt(id));
        setCourse(selectedCourse);
      });
  }, [id]);

  if (!course) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container mt-4">
      <div
        className="card mx-auto"
        style={{
          width: "40rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <img
          src={course.image}
          className="card-img-top"
          alt={course.title}

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

          <Link to="/" className="btn btn-secondary mt-3">
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

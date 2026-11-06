import { Link } from "react-router-dom";

function CourseCard({ course }) {
    return (
        <Link to={`/courses/${course.slug}`} className="course-card">
      <span className="category-badge">
        {course.category}
      </span>

      <h2>{course.title}</h2>

      <p>{course.duration}</p>

      <span className="view-course">
         View Course 
      </span>
      </Link>
    ); 
}

export default CourseCard
import { useParams, useNavigate} from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const course = courses.find(
        (item) => item.slug === slug
    );

    if(!course) {
        return (
            <div className="page-container not-found">
                <h1>Course not found</h1>
                <p>
                    Sorry, the course you are looking for does not exist.
                </p>

                <button onClick={() => navigate("/")}>
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="page-container detail-page">
            <button
            className="back-button"
            onClick={() => navigate(-1)}
            >
                ← Go Back  
            </button>

            <div className="course-detail">
                <span className="category-badge">
                    {course.category}
                </span>

                 <h1>{course.title}</h1>

                    <p className="course-description">
                        {course.description}
                    </p> 

                    <p className="course-description">
                        {course.description}
                    </p>

                    <section className="topic-section">
                        <h2>What You'll learn</h2>

                        <ul>
                            {course.topics.map((topic, index) =>(
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                    </section>
            </div>
        </div>
    );
}

export default CourseDetail;
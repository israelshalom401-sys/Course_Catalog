import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
    return (
        <div className="page-container">
            <section className="hero">
                <p className="eyebrow">TECHYJAUNT LEARNING</p>

                <h1>Learn. Build. Grow.</h1>

                <p>
                  Explore our courses and develop the skills you need to become a better developer.
                  </p>
            </section>

            <section className="courses-section">
                <h2>Explore Our Courses</h2>

                <div className="course-grid">
                    {courses.map((course) => (
                        <CourseCard
                        key={course.id}
                        course={course}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
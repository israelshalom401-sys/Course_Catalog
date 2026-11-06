import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Category() {
    const { category} = useParams();

    const filteredCourses = courses.filter(
        (course) =>
            course.category.toLowerCase() === category.toLowerCase()
    );

    return(
        <div className="page-container">
            <section className="category-header">
                <p className="eyebrow">EXPLORE BY LEVEL</p>

                <h1>{category} Courses</h1>

                <p>
                    Explore our {category.toLowerCase()} level courses and develop your skills.
                </p>
            </section>

            {filteredCourses.length > 0 ? (
                <div className="course-grid">
                    {filteredCourses.map((course) =>(
                        <CourseCard
                        key={course.id}
                        course={course}
                        />
                    ))}
                </div>    
            ) : (
                <p>No courses found in this category.</p>
            )}
        </div>
    );
}

export default Category;
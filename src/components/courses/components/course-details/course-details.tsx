import { useEffect, useParams, useState } from 'hooks/hooks';
import { CourseInfo } from '../course-info/course-info';
import currentCourse from '../../../../mock/course.json'
import styles from './course-details.module.scss';
import { ICourse } from 'common/types/course.types';

const CourseDetails: React.FC = () => {
    const [course, setCourse] = useState<ICourse | null>(null)
    const { id } = useParams();
    useEffect(() => {
        setCourse(currentCourse)
    }, [])

    return (
        <div className={styles['course-page']}>
            {course && (
                <CourseInfo course={course} />
            )}
        </div>
    );
};

export { CourseDetails };

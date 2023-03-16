import Spinner from 'components/common/loader/loader';
import { CoursesCard } from './components/courses-card/courses-card.components';
import styles from './courses-layout.module.scss';
import { Course } from 'common/types/coursesList.types';

interface ICoursesLayoutProps {
  courses: Course[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const CoursesLayout: React.FC<ICoursesLayoutProps> = ({ courses, loading }) => {
  return (
    <>
      {loading === 'pending' ? (
        <Spinner isOverflow />
      ) : (
        <section className={styles['course']}>
          <ul className={styles['course-list']}>
            {courses.map((el) => (
              <CoursesCard
                key={el.id}
                id={el.id}
                title={el.title}
                lessonsCount={el.lessonsCount}
                meta={el.meta}
                rating={el.rating}
                preview={el.previewImageLink}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export { CoursesLayout };

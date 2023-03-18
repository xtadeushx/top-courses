import { Lesson } from 'common/types/course.types';

import { formateTime } from 'helpers/helpers';

import styles from './course-lesson.module.scss';
interface ICourseLessonProps {
  lesson: Lesson;
  onclick: (order: number) => void
}
const CourseLesson: React.FC<ICourseLessonProps> = ({ lesson, onclick }) => {
  const { order, duration, title, id } = lesson;
  return (
    <>
      <li className={styles['lesson']} key={id} onClick={() => onclick(order)}>
        <div className={styles['lesson__title-wrapper']}>
          <p className={styles['lesson__title']}>Lesson {order}</p>
          <p className={styles['lesson__describe']}>{title}</p>
        </div>
        <p className={styles['lesson__duration']}>{formateTime(duration)}</p>
      </li>
      <hr />
    </>
  );
};

export { CourseLesson };

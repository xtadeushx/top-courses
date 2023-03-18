import { Player } from 'components/common/video/video';
import { Lesson } from 'common/types/course.types';
import { CourseLesson } from '../course-lesson/course-lesson';

import styles from './course-content.module.scss';
interface ICourseContentProps {
  duration: number;
  link: string;
  poster?: string;
  lessons: Lesson[];
}
const CourseContent: React.FC<ICourseContentProps> = ({
  duration,
  link,
  poster = '',
  lessons,
}) => {
  return (
    <div className={styles['course__content']}>
      <div className={styles['course__content-video']}>
        <Player
          duration={duration}
          poster={poster}
          link={
            link
          }
          autoPlay={false}
          controls={true}
          muted={false}
        />
        <span className={styles['tooltip-text__up']}>to up speed press 'W' </span>
        <span className={styles['tooltip-text__down']}>to down speed press 'Q' </span>
      </div>
      <ul className={styles['course__lessons-list']}>
        {lessons &&
          lessons.map((lesson) => (
            <CourseLesson key={lesson.id} lesson={lesson} />
          ))}
      </ul>
    </div>
  );
};

export { CourseContent };

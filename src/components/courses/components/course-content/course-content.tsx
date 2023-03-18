import { Player } from 'components/common/video/video';
import { AiFillLock } from 'react-icons/ai';
import { Lesson } from 'common/types/course.types';
import { CourseLesson } from '../course-lesson/course-lesson';

import styles from './course-content.module.scss';
interface ICourseContentProps {
  duration: number;
  link: string;
  poster?: string;
  lessons: Lesson[];
  previewImageLink: string;
  order: number;
  status: 'locked' | 'unlocked';
  handelLessonsOrder: (order: number) => void;
}
const CourseContent: React.FC<ICourseContentProps> = ({
  duration,
  link,
  poster = '',
  lessons,
  // previewImageLink,
  order,
  status,
  handelLessonsOrder,
}) => {
  const { previewImageLink } = lessons[order]

  return (
    <div className={styles['course__content']}>
      <div className={styles['course__content-video']}>
        <Player
          duration={duration}
          poster={`${previewImageLink}/lesson-${order}.webp`}
          link={link}
          autoPlay={false}
          controls={true}
          muted={false}
          status={status}
        />
        {status === 'unlocked' && (
          <>
            <span className={styles['tooltip-text__up']}>
              to up speed press 'W'{' '}
            </span>
            <span className={styles['tooltip-text__down']}>
              to down speed press 'Q'{' '}
            </span>
          </>
        )}

        {status === 'locked' && (
          <span className={styles['locked']}>
            <AiFillLock className={styles['locked-img']} />
          </span>
        )}
      </div>
      <ul className={styles['course__lessons-list']}>
        {lessons &&
          lessons.map((lesson) => (
            <CourseLesson
              key={lesson.id}
              lesson={lesson}
              onclick={handelLessonsOrder}
            />
          ))}
      </ul>
    </div>
  );
};

export { CourseContent };

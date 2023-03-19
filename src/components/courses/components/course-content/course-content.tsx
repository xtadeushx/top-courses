import { Player } from 'components/common/video/video';
import { CourseLesson } from '../course-lesson/course-lesson';

import { formateTime } from 'helpers/helpers';
import { ICourseContentProps } from './types';

import styles from './course-content.module.scss';
import { CourseLocker } from '../course-locker/course-locker';
import { Lesson } from 'common/types/course.types';

const CourseContent: React.FC<ICourseContentProps> = ({
  lessons,
  currentLesson,
  handelLessonsOrder,
}) => {
  const { previewImageLink, title, duration, order, link, status } = lessons.find(el => el.order === currentLesson) as Lesson;
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

        <CourseLocker status={status} />

        <span className={styles['tooltip-text__subscribe']}>
          {order}. {title} | {formateTime(duration)}
        </span>
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

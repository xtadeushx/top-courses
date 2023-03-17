import { ICourse } from 'common/types/course.types';
import { Player } from 'components/common/video/video';
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineClockCircle,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import styles from './course-info.module.scss';
import { CourseDescription } from '../course-description/course-description';
import { CourseSkills } from '../course-skills/course-skills';
import { CourseContent } from '../course-content/course-content';
import classNames from 'classnames';

interface ICourseInfoProps {
  course: ICourse;
}

const CourseInfo: React.FC<ICourseInfoProps> = ({ course }) => {
  const {
    previewImageLink: poster,
    title,
    rating,
    lessons,
    launchDate,
    duration: courseDuration,
    description,
    meta,
  } = course;
  const { link, previewImageLink, duration } = course.lessons[0];
  return (
    <section className={styles['course']}>
      <div className="course__description">
        <h1 className={styles['course__title']}>{title}</h1>
        <h3 className={styles['rating']}>
          rating:
          <span>
            <span className={classNames({
              [styles.red]: rating < 3,
              [styles.yellow]: rating >= 3 && rating < 5,
              [styles.green]: rating >= 5,
            })}> {rating}
            </span>
          </span>
        </h3>
      </div>
      <div className={styles['course__preview-info']}>
        <div className={styles['course__preview-img']}>
          <img src={poster + '/cover.webp'} alt="title" />
          <div className={styles['course__preview-action']}>
            <span>

              <AiOutlineLike className={styles.like} /> 0
            </span>
            <span>

              <AiOutlineDislike className={styles.disLike} /> 0
            </span>
          </div>
        </div>
        <div className={styles['course__preview-description']}>
          <CourseDescription
            lessons={lessons}
            launchDate={launchDate}
            duration={courseDuration}
          />
          <p className={styles['course__main-info']}>{description}</p>
          <CourseSkills meta={meta} className="light" />
        </div>
      </div>
      <CourseContent duration={duration} link={link} lessons={course.lessons} />
    </section>
  );
};

export { CourseInfo };

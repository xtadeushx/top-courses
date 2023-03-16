import { Link } from 'hooks/hooks';
import { Meta } from 'common/types/course.types';
import { AppRoute } from 'common/enums/enums';
import { CourseSkills } from '../course-skills/course-skills';
import { Player } from 'components/common/video/video';

import styles from './courses-card.module.scss';

interface ICoursesCardProps {
  id: string;
  title: string;
  lessonsCount: number;
  rating: number;
  preview: string;
  meta: Meta;
}

const CoursesCard: React.FC<ICoursesCardProps> = ({
  title,
  lessonsCount,
  preview,
  meta,
  rating,
  id,
}) => {
  const { duration, link } = meta?.courseVideoPreview || {
    previewImageLink: '',
    duration: 10,
    link: '',
  };
  return (
    <div data-test-id="curse-card" className={styles['curse-card']}>
      <div className={styles['curse-card__content']}>
        <div className={styles['curse-info']}>
          <h3
            data-test-id="curse-card-title"
            className={styles['curse-info__title']}
          >
            {title}
          </h3>
          <div className={styles['curse-info__content']}>
            <Player
              duration={duration}
              poster={preview}
              link={link}
              autoPlay={false}
              controls={false}
              muted={true}
            />
            <div className={styles['curse-info_box']}>
              <span
                data-test-id="curse-card-lesson"
                className={styles['curse-card-lesson']}
              >
                lessons: {lessonsCount}
              </span>
              <span
                data-test-id="curse-card-rating"
                className={styles['curse-card-rating']}
              >
                rating: {rating}
              </span>
            </div>
          </div>
        </div>
        <CourseSkills meta={meta} className='dark' />
      </div>
      <Link
        data-test-id="curse-card-link"
        to={AppRoute.COURSE_BY_ID}
        className="button"
      >
        begin studding
      </Link>
    </div>
  );
};

export { CoursesCard };

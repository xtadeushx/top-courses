import { Link } from 'hooks/hooks';
import { Meta } from 'common/types/course.types';
import { AppRoute } from 'common/enums/enums';
import { CourseSkills } from '../course-skills/course-skills';
import { Player } from 'components/common/video/video';

import styles from './courses-card.module.scss';
import classNames from 'classnames';

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
            <div className={styles['curse-info__video-wrapper']}>
              <Player
                duration={duration}
                poster={preview}
                link={link}
                autoPlay={false}
                controls={false}
                muted={true}
              />
            </div>

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
                rating:
                <span className={classNames({
                  [styles.red]: rating < 3,
                  [styles.yellow]: rating >= 3 && rating < 5,
                  [styles.green]: rating >= 5,
                })}>{rating}
                </span>
              </span>
            </div>
          </div>
        </div>
        <CourseSkills meta={meta} className="dark" />
      </div>
      <Link
        data-test-id="curse-card-link"
        to={`${AppRoute.COURSES}/${id}`}
        className="button"
      >
        begin studding
      </Link>
    </div >
  );
};

export { CoursesCard };

import { Link } from 'hooks/hooks';
import { Meta } from 'common/types/course.types';

import styles from './courses-card.module.scss';
import { CourseVideoPreview } from 'common/types/coursesList.types';
import { Player } from 'components/common/video/video';

interface ICoursesCardProps {
    id: string
    title: string
    lessonsCount: number
    rating: number,
    preview: string
    meta: Meta
};

const CoursesCard: React.FC<ICoursesCardProps> = ({ title, lessonsCount, preview, meta, rating, id }) => {
    const { previewImageLink, duration, link } = meta.courseVideoPreview || { previewImageLink: '', duration: 10, link: '' }
    const { skills } = meta
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
                <ul className={styles['skills']}>
                    {skills?.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
            <Link
                data-test-id="curse-card-link"
                to={`courses:id`}
                className="button"
            >
                begin studding
            </Link>
        </div>
    );
}

export { CoursesCard }


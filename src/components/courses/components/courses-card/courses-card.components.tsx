import { Link } from 'hooks/hooks';
import styles from './courses-card.module.scss';

const CoursesCard: React.FC = ({ title, previewImageLink, lessonsCount, meta, rating }: any) => {
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
                        <img src={previewImageLink + '/cover.webp'} alt="" />
                        <span
                            data-test-id="curse-card-duration"
                            className={styles['curse-info__duration']}
                        >
                            lessons: {lessonsCount}
                        </span>
                        <span
                            data-test-id="curse-card-level"
                            className={styles['curse-info__level']}
                        >
                            rating: {rating}
                        </span>
                    </div>
                </div>
                <div className={styles['curse-skills']}>
                    {meta?.skills?.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </div>
            </div>
            <Link
                data-test-id="curse-card-link"
                to={`courses:id`}
                className="button"
            >
                Studding a curse
            </Link>
        </div>
    );
}

export { CoursesCard }
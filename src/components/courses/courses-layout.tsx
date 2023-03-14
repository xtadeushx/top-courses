import Spinner from "components/common/loader/loader";
import { CoursesCard } from "./components/courses-card/courses-card.components";
import styles from './courses-layout.module.scss';

const CoursesLayout: React.FC = ({ courses, loading }: any) => {
    return (
        <>
            {loading === 'pending' ? (
                <Spinner isOverflow />
            ) : (
                <section className={styles['course']}>
                    <ul className={styles['course-list']}>
                        {courses.map(el => (
                            <CoursesCard
                                key={el.id}
                                title={el.title}
                                previewImageLink={el.previewImageLink}
                                lessonsCount={el.lessonsCount}
                                meta={el.meta}
                                rating={el.rating}
                            />
                        ))}
                    </ul>

                </section>)}
        </>


    )
}

export { CoursesLayout };

import { ICourseTooltipProps } from './types';

import styles from './course-locker.module.scss';

const CourseTooltip: React.FC<ICourseTooltipProps> = ({ status }) => {
    return (
        <> {status === 'locked' ? (
            <>
                <span className={styles['tooltip-text__up']}>
                    to up speed press 'W'
                </span>
                <span className={styles['tooltip-text__down']}>
                    to down speed press 'Q'
                </span>
            </>
        ) : null} </>
    )
}

export { CourseTooltip };
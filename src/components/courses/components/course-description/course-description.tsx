import React, { PropsWithChildren } from 'react';
import { MdOutlineLanguage, MdOutlineDateRange } from 'react-icons/md'
import { AiOutlineClockCircle, AiOutlineVideoCamera } from 'react-icons/ai'


import styles from './course-description.module.scss';


interface ICourseDescriptionProps {
    duration: number
    lessons: any
    launchDate: string
}
const CourseDescription: React.FC<ICourseDescriptionProps & PropsWithChildren> = ({ children, duration, lessons, launchDate }) => {
    return (
        <div className={styles["course__preview-duration"]}>
            <div className={styles["course__preview-duration"]}>
                <AiOutlineClockCircle className={styles.clock} />
                <p>DURATION <span>{duration}</span></p>
            </div>
            <div className={styles["course__preview-duration"]}>
                <AiOutlineVideoCamera className={styles.clock} />
                <p>LESSONS <span>{lessons.length} videos</span></p>
            </div>
            <div className={styles["course__preview-duration"]}>
                <MdOutlineLanguage className={styles.clock} />
                <p>Language <span>English</span></p>
            </div>
            <div className={styles["course__preview-duration"]}>
                <MdOutlineDateRange className={styles.clock} />
                <p>ADDED DATE <span>{launchDate}</span></p>
            </div>
        </div>
    )
}

export { CourseDescription }
import { AiFillLock } from 'react-icons/ai';

import { ICourseLockerProps } from './types';

import styles from './course-locker.module.scss';

const CourseLocker: React.FC<ICourseLockerProps> = ({ status }) => {
  return (
    <>
      {' '}
      {status === 'locked' ? (
        <span className={styles['locked']}>
          <AiFillLock className={styles['locked-img']} />
        </span>
      ) : null}{' '}
    </>
  );
};

export { CourseLocker };

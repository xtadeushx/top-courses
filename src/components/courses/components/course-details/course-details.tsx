import { useFetch, useParams } from 'hooks/hooks';
import { CourseInfo } from '../course-info/course-info';
import { ENV } from 'common/enums/enums';
import Spinner from 'components/common/loader/loader';

import styles from './course-details.module.scss';

const CourseDetails: React.FC = () => {
  const { id } = useParams();
  const { data: course, error } = useFetch(`${ENV.API_PATH}/${id}`, 'id');

  if (!course) {
    return <Spinner isOverflowRootContainer />;
  }

  if (!course && error) {
    return <h3>{`Server response with  ${error.toString()}`}</h3>;
  }

  return (
    <div className={styles['course-page']}>
      {course && <CourseInfo course={course} />}
    </div>
  );
};

export { CourseDetails };

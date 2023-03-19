import { IMetaProps } from './types';

import styles from './course-skills.module.scss';

const CourseSkills: React.FC<IMetaProps> = ({ meta, className }) => {
  return (
    <ul className={styles[className]}>
      {meta && meta.skills?.map((el, index) => <li key={index}>{el}</li>)}
    </ul>
  );
};

export { CourseSkills };

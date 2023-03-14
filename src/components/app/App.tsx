import Header from 'components/common/header/header';
import styles from './app.module.scss'
import { useEffect, useState } from 'react';
import { courses } from 'services/services';
import { ENV } from 'common/enums/enums';
import previewCourses from '../../moch/cursess.json'
import { ICoursesList } from 'common/types/coursesList.types';
import Footer from 'components/common/footer/footer';
import { CoursesLayout } from 'components/courses/courses-layout';

const App = () => {
  const [courses, setCourses] = useState<any>([])

  useEffect(() => {
    setCourses(previewCourses.courses)
  }, [])


  return (
    <div className={styles.app}>
      <Header
        logOut={() => console.log('log out')}
        user='Dijon Dou'
      />
      <CoursesLayout
        courses={courses}
        loading="success"
      />
      <Footer />
    </div>
  )
}

export { App };

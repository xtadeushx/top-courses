import Header from 'components/common/header/header';
import styles from './app.module.scss'
import { useEffect, useState } from 'react';
import { courses } from 'services/services';
import previewCourses from '../../moch/cursess.json'
import { Course, } from 'common/types/coursesList.types';
import Footer from 'components/common/footer/footer';
import { CoursesLayout } from 'components/courses/courses-layout';

const App = () => {
  console.log(previewCourses)
  const [courses, setCourses] = useState<Course[]>([])
  useEffect(() => {
    setCourses(previewCourses)
  }, [])


  return (
    <div className={styles.app}>
      <Header
        logOut={() => console.log('log out')}
        user='Dijon Dou'
      />
      <CoursesLayout
        courses={courses}
        loading="succeeded"
      />
      <Footer />
    </div>
  )
}

export { App };

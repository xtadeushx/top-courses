import { useEffect, useState } from 'react';
import { Header } from 'components/common/header/header';
import { Footer } from 'components/common/footer/footer';
import { PaginatedCourses } from 'components/paginate/pagination';

import { Course, } from 'common/types/coursesList.types';

import previewCourses from '../../moch/cursess.json';

import styles from './app.module.scss';

const App = () => {

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
      <PaginatedCourses courses={courses}
        loading='succeeded' itemsPerPage={10} />
      {/* <CoursesLayout
        courses={courses}
        loading='succeeded'
      /> 
      */}
      <Footer />
    </div>
  )
}

export { App };

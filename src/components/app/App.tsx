import { Header } from 'components/common/header/header';
import { Footer } from 'components/common/footer/footer';
import { PaginatedCourses } from 'components/paginate/pagination';

import { Course } from 'common/types/coursesList.types';

import previewCourses from '../../mock/courses.json';

import { useEffect, useState, Routes, Route } from 'hooks/hooks';
import styles from './app.module.scss';
import { AppRoute } from 'common/enums/enums';
import { NotFoundPage } from 'components/pages/not-found-page/not-found-page';
import { Registration } from 'components/pages/registration/registration';
import { Login } from 'components/pages/login/login';
import { CourseDetails } from 'components/courses/components/course-details/course-details';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    setCourses(previewCourses);
  }, []);

  return (
    <div className={styles.app}>
      <Header logOut={() => console.log('log out')} user="Olexandr Unknown" />
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <PaginatedCourses
              courses={courses}
              loading="succeeded"
              itemsPerPage={10}
            />
          }
        />
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.REGISTRATION} element={<Registration />} />
        <Route path={AppRoute.ANY} element={<NotFoundPage />} />
        <Route path={AppRoute.COURSE_BY_ID} element={<CourseDetails />} />
      </Routes>

      {/* <CoursesLayout
        courses={courses}
        loading='succeeded'
      /> 
      */}
      <Footer />
    </div>
  );
};

export { App };

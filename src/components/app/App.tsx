import { Header } from 'components/common/header/header';
import { Footer } from 'components/common/footer/footer';
import { PaginatedCourses } from 'components/paginate/pagination';

import { Course } from 'common/types/coursesList.types';

import previewCourses from '../../mock/courses.json';

import { useEffect, useState, Routes, Route, useFetch } from 'hooks/hooks';
import styles from './app.module.scss';
import { AppRoute, ENV, HttpHeader } from 'common/enums/enums';
import { NotFoundPage } from 'components/pages/not-found-page/not-found-page';
import { Registration } from 'components/pages/registration/registration';
import { Login } from 'components/pages/login/login';
import { CourseDetails } from 'components/courses/components/course-details/course-details';
import { courses } from 'services/services';
import { useToken } from 'hooks/useFetch/useToken';

const App = () => {
  const { loading, response, error } = useFetch(
    ENV.API_PATH
  );
  if (!response) return;
  const { courses } = response;

  return (
    <div className={styles.app}>
      <Header logOut={() => console.log('log out')} user="Olexandr Unknown" />
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <PaginatedCourses
              courses={courses}
              loading={loading}
              error={error}
              itemsPerPage={10}
            />
          }
        />
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.REGISTRATION} element={<Registration />} />
        <Route path={AppRoute.ANY} element={<NotFoundPage />} />
        <Route path={AppRoute.COURSE_BY_ID} element={<CourseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export { App };

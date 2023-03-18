import ReactPaginate from 'react-paginate';
import { useState } from 'hooks/hooks';
import { CoursesLayout } from 'components/courses/courses-layout';
import Spinner from 'components/common/loader/loader';

import { IPaginatedItemsProps } from './types';

import styles from './pagination.module.scss';

const PaginatedCourses: React.FC<IPaginatedItemsProps> = ({
  itemsPerPage,
  courses,
  loading,
  error,
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = courses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(courses.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;
    setItemOffset(newOffset);
  };

  if (!courses && loading === 'pending') return <Spinner isOverflow />;
  if (!courses && error)
    return <h3>{`Server response with  ${error.toString()}`}</h3>;

  return (
    <>
      <CoursesLayout courses={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        className={styles.pagination}
        activeClassName={styles.selected}
        nextClassName={styles.next}
        previousClassName={styles.previous}
        pageClassName={styles.page}
      />
    </>
  );
};
export { PaginatedCourses };

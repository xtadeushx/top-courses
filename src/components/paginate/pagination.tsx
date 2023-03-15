import ReactPaginate from 'react-paginate';
import { useState } from 'hooks/hooks'
import { CoursesLayout } from 'components/courses/courses-layout';
import { Course } from 'common/types/coursesList.types';
import styles from './pagination.module.scss'
interface IPaginatedItemsProps {
    itemsPerPage: number
    courses: Course[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const PaginatedCourses: React.FC<IPaginatedItemsProps> = ({ itemsPerPage, courses, loading }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = courses.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(courses.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % courses.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <CoursesLayout courses={currentItems} loading={loading} />
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
            // renderOnZeroPageCount={null}
            />
        </>
    );
}
export { PaginatedCourses };
import { Course } from 'common/types/coursesList.types';


export interface IPaginatedItemsProps {
    itemsPerPage: number;
    courses: Course[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: any;
}
import { Meta } from 'common/types/course.types';



export interface ICoursesCardProps {
    id: string;
    title: string;
    lessonsCount: number;
    rating: number;
    preview: string;
    meta: Meta;
}
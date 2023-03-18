import { Lesson } from "common/types/course.types";

export interface ICourseContentProps {
    lessons: Lesson[];
    currentLesson: number;
    handelLessonsOrder: (order: number) => void;
}
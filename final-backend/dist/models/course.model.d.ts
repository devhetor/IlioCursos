import { Entity } from '@loopback/repository';
import { Student } from './student.model';
export declare class Course extends Entity {
    id?: number;
    title: string;
    students: Student[];
    constructor(data?: Partial<Course>);
}
export interface CourseRelations {
}
export declare type CourseWithRelations = Course & CourseRelations;

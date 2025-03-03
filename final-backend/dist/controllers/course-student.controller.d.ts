import { Count, Filter, Where } from '@loopback/repository';
import { Course, Student } from '../models';
import { CourseRepository } from '../repositories';
export declare class CourseStudentController {
    protected courseRepository: CourseRepository;
    constructor(courseRepository: CourseRepository);
    find(id: number, filter?: Filter<Student>): Promise<Student[]>;
    create(id: typeof Course.prototype.id, student: Omit<Student, 'id'>): Promise<Student>;
    patch(id: number, student: Partial<Student>, where?: Where<Student>): Promise<Count>;
    delete(id: number, where?: Where<Student>): Promise<Count>;
}

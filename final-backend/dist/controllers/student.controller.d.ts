import { Count, Filter, Where } from '@loopback/repository';
import { Student } from '../models';
import { StudentRepository } from '../repositories';
export declare class StudentController {
    studentRepository: StudentRepository;
    constructor(studentRepository: StudentRepository);
    create(student: Omit<Student, 'id'>): Promise<Student>;
    count(where?: Where<Student>): Promise<Count>;
    find(filter?: Filter<Student>): Promise<Student[]>;
    updateAll(student: Student, where?: Where<Student>): Promise<Count>;
    findById(id: number): Promise<Student>;
    updateById(id: number, student: Student): Promise<void>;
    replaceById(id: number, student: Student): Promise<void>;
    deleteById(id: number): Promise<void>;
}

import { Student, Department } from '../models';
import { StudentRepository } from '../repositories';
export declare class StudentDepartmentController {
    studentRepository: StudentRepository;
    constructor(studentRepository: StudentRepository);
    getDepartment(id: typeof Student.prototype.id): Promise<Department>;
}

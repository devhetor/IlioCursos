import { StudentRepository } from '../repositories';
import { Address, Student } from '../models';
export declare class StudentAddressController {
    protected studentRepository: StudentRepository;
    constructor(studentRepository: StudentRepository);
    createAddress(studentId: typeof Student.prototype.id, addressData: Address): Promise<Address>;
}

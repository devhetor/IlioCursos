import { Entity } from '@loopback/repository';
import { Address, AddressRelations } from './address.model';
export declare class Student extends Entity {
    id: number;
    firstName: string;
    lastName: string;
    courseId?: number;
    departmentId: number;
    address: Address;
    constructor(data?: Partial<Student>);
}
export interface StudentRelations {
    address?: AddressRelations;
}
export declare type StudentWithRelations = Student & StudentRelations;

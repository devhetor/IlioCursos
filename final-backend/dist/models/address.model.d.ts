import { Entity } from '@loopback/repository';
import { StudentWithRelations } from './student.model';
export declare class Address extends Entity {
    id?: number;
    city: string;
    zip?: number;
    phone: string;
    studentId: number;
    constructor(data?: Partial<Address>);
}
export interface AddressRelations {
    student?: StudentWithRelations;
}
export declare type AddressWithRelations = Address & AddressRelations;

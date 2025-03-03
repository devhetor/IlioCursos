import { Entity } from '@loopback/repository';
export declare class Department extends Entity {
    id?: number;
    name: string;
    constructor(data?: Partial<Department>);
}
export interface DepartmentRelations {
}
export declare type DepartmentWithRelations = Department & DepartmentRelations;

import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { Student, StudentRelations, Department, Address } from '../models';
import { MysqlDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { DepartmentRepository } from './department.repository';
import { AddressRepository } from '.';
export declare class StudentRepository extends DefaultCrudRepository<Student, typeof Student.prototype.id, StudentRelations> {
    protected departmentRepositoryGetter: Getter<DepartmentRepository>;
    protected addressRepositoryGetter: Getter<AddressRepository>;
    readonly department: BelongsToAccessor<Department, typeof Student.prototype.id>;
    readonly address: HasOneRepositoryFactory<Address, typeof Student.prototype.id>;
    constructor(dataSource: MysqlDataSource, departmentRepositoryGetter: Getter<DepartmentRepository>, addressRepositoryGetter: Getter<AddressRepository>);
}

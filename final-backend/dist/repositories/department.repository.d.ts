import { DefaultCrudRepository } from '@loopback/repository';
import { Department, DepartmentRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class DepartmentRepository extends DefaultCrudRepository<Department, typeof Department.prototype.id, DepartmentRelations> {
    constructor(dataSource: MysqlDataSource);
}

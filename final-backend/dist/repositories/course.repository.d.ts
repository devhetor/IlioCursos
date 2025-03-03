import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Course, CourseRelations, Student } from '../models';
import { MysqlDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { StudentRepository } from './student.repository';
export declare class CourseRepository extends DefaultCrudRepository<Course, typeof Course.prototype.id, CourseRelations> {
    protected studentRepositoryGetter: Getter<StudentRepository>;
    readonly students: HasManyRepositoryFactory<Student, typeof Course.prototype.id>;
    constructor(dataSource: MysqlDataSource, studentRepositoryGetter: Getter<StudentRepository>);
}

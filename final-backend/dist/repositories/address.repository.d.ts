import { DefaultCrudRepository } from '@loopback/repository';
import { Address, AddressRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class AddressRepository extends DefaultCrudRepository<Address, typeof Address.prototype.id, AddressRelations> {
    constructor(dataSource: MysqlDataSource);
}

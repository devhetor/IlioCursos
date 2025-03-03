import { DefaultCrudRepository } from '@loopback/repository';
import { Product, ProductRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id, ProductRelations> {
    constructor(dataSource: DbDataSource);
}

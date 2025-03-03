import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id: number;
    title: string;
    qty: number;
    price?: number;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;

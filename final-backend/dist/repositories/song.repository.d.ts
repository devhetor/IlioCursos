import { DefaultCrudRepository } from '@loopback/repository';
import { Song, SongRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class SongRepository extends DefaultCrudRepository<Song, typeof Song.prototype.id, SongRelations> {
    constructor(dataSource: MysqlDataSource);
}

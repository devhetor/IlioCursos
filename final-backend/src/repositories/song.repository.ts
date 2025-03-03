import {DefaultCrudRepository} from '@loopback/repository';
import {Song, SongRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SongRepository extends DefaultCrudRepository<
  Song,
  typeof Song.prototype.id,
  SongRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Song, dataSource);
  }
}

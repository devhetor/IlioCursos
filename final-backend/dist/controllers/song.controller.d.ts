import { Count, Filter, Where } from '@loopback/repository';
import { Song } from '../models';
import { SongRepository } from '../repositories';
export declare class SongController {
    songRepository: SongRepository;
    constructor(songRepository: SongRepository);
    create(song: Omit<Song, 'id'>): Promise<Song>;
    count(where?: Where<Song>): Promise<Count>;
    find(filter?: Filter<Song>): Promise<Song[]>;
    updateAll(song: Song, where?: Where<Song>): Promise<Count>;
    findById(id: number, filter?: Filter<Song>): Promise<Song>;
    updateById(id: number, song: Song): Promise<void>;
    replaceById(id: number, song: Song): Promise<void>;
    deleteById(id: number): Promise<void>;
}

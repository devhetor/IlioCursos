import { Entity } from '@loopback/repository';
export declare class Song extends Entity {
    id?: number;
    title: string;
    url: string;
    rating: number;
    constructor(data?: Partial<Song>);
}
export interface SongRelations {
}
export declare type SongWithRelations = Song & SongRelations;

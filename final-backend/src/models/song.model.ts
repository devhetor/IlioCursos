import {Entity, model, property} from '@loopback/repository';

@model()
export class Song extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;


  constructor(data?: Partial<Song>) {
    super(data);
  }
}

export interface SongRelations {
  // describe navigational properties here
}

export type SongWithRelations = Song & SongRelations;

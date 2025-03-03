import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Song} from '../models';
import {SongRepository} from '../repositories';

export class SongController {
  constructor(
    @repository(SongRepository)
    public songRepository : SongRepository,
  ) {}

  @post('/songs', {
    responses: {
      '200': {
        description: 'Song model instance',
        content: {'application/json': {schema: getModelSchemaRef(Song)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Song),
        },
      },
    })
    song: Omit<Song, 'id'>,
  ): Promise<Song> {
    return this.songRepository.create(song);
  }

  @get('/songs/count', {
    responses: {
      '200': {
        description: 'Song model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Song)) where?: Where<Song>,
  ): Promise<Count> {
    return this.songRepository.count(where);
  }

  @get('/songs', {
    responses: {
      '200': {
        description: 'Array of Song model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Song, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Song)) filter?: Filter<Song>,
  ): Promise<Song[]> {
    return this.songRepository.find(filter);
  }

  @patch('/songs', {
    responses: {
      '200': {
        description: 'Song PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Song, {partial: true}),
        },
      },
    })
    song: Song,
    @param.query.object('where', getWhereSchemaFor(Song)) where?: Where<Song>,
  ): Promise<Count> {
    return this.songRepository.updateAll(song, where);
  }

  @get('/songs/{id}', {
    responses: {
      '200': {
        description: 'Song model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Song, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Song)) filter?: Filter<Song>
  ): Promise<Song> {
    return this.songRepository.findById(id, filter);
  }

  @patch('/songs/{id}', {
    responses: {
      '204': {
        description: 'Song PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Song, {partial: true}),
        },
      },
    })
    song: Song,
  ): Promise<void> {
    await this.songRepository.updateById(id, song);
  }

  @put('/songs/{id}', {
    responses: {
      '204': {
        description: 'Song PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() song: Song,
  ): Promise<void> {
    await this.songRepository.replaceById(id, song);
  }

  @del('/songs/{id}', {
    responses: {
      '204': {
        description: 'Song DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.songRepository.deleteById(id);
  }
}

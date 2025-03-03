"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SongController = class SongController {
    constructor(songRepository) {
        this.songRepository = songRepository;
    }
    async create(song) {
        return this.songRepository.create(song);
    }
    async count(where) {
        return this.songRepository.count(where);
    }
    async find(filter) {
        return this.songRepository.find(filter);
    }
    async updateAll(song, where) {
        return this.songRepository.updateAll(song, where);
    }
    async findById(id, filter) {
        return this.songRepository.findById(id, filter);
    }
    async updateById(id, song) {
        await this.songRepository.updateById(id, song);
    }
    async replaceById(id, song) {
        await this.songRepository.replaceById(id, song);
    }
    async deleteById(id) {
        await this.songRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/songs', {
        responses: {
            '200': {
                description: 'Song model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Song) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Song),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "create", null);
__decorate([
    rest_1.get('/songs/count', {
        responses: {
            '200': {
                description: 'Song model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Song))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "count", null);
__decorate([
    rest_1.get('/songs', {
        responses: {
            '200': {
                description: 'Array of Song model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Song, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Song))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "find", null);
__decorate([
    rest_1.patch('/songs', {
        responses: {
            '200': {
                description: 'Song PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Song, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Song))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Song, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/songs/{id}', {
        responses: {
            '200': {
                description: 'Song model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Song, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Song))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "findById", null);
__decorate([
    rest_1.patch('/songs/{id}', {
        responses: {
            '204': {
                description: 'Song PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Song, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Song]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "updateById", null);
__decorate([
    rest_1.put('/songs/{id}', {
        responses: {
            '204': {
                description: 'Song PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Song]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/songs/{id}', {
        responses: {
            '204': {
                description: 'Song DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "deleteById", null);
SongController = __decorate([
    __param(0, repository_1.repository(repositories_1.SongRepository)),
    __metadata("design:paramtypes", [repositories_1.SongRepository])
], SongController);
exports.SongController = SongController;
//# sourceMappingURL=song.controller.js.map
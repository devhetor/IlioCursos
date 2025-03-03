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
let CourseController = class CourseController {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async create(course) {
        return await this.courseRepository.create(course);
    }
    async count(where) {
        return await this.courseRepository.count(where);
    }
    async find(filter) {
        return await this.courseRepository.find(filter);
    }
    async updateAll(course, where) {
        return await this.courseRepository.updateAll(course, where);
    }
    async findById(id) {
        return await this.courseRepository.findById(id);
    }
    async updateById(id, course) {
        await this.courseRepository.updateById(id, course);
    }
    async replaceById(id, course) {
        await this.courseRepository.replaceById(id, course);
    }
    async deleteById(id) {
        await this.courseRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/courses', {
        responses: {
            '200': {
                description: 'Course model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Course) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "create", null);
__decorate([
    rest_1.get('/courses/count', {
        responses: {
            '200': {
                description: 'Course model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Course))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "count", null);
__decorate([
    rest_1.get('/courses', {
        responses: {
            '200': {
                description: 'Array of Course model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Course) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Course))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "find", null);
__decorate([
    rest_1.patch('/courses', {
        responses: {
            '200': {
                description: 'Course PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Course))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Course, Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/courses/{id}', {
        responses: {
            '200': {
                description: 'Course model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Course) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "findById", null);
__decorate([
    rest_1.patch('/courses/{id}', {
        responses: {
            '204': {
                description: 'Course PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Course]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "updateById", null);
__decorate([
    rest_1.put('/courses/{id}', {
        responses: {
            '204': {
                description: 'Course PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Course]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/courses/{id}', {
        responses: {
            '204': {
                description: 'Course DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "deleteById", null);
CourseController = __decorate([
    __param(0, repository_1.repository(repositories_1.CourseRepository)),
    __metadata("design:paramtypes", [repositories_1.CourseRepository])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map
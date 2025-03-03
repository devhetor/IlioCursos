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
let CourseStudentController = class CourseStudentController {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async find(id, filter) {
        return await this.courseRepository.students(id).find(filter);
    }
    async create(id, student) {
        return await this.courseRepository.students(id).create(student);
    }
    async patch(id, student, where) {
        return await this.courseRepository.students(id).patch(student, where);
    }
    async delete(id, where) {
        return await this.courseRepository.students(id).delete(where);
    }
};
__decorate([
    rest_1.get('/courses/{id}/students', {
        responses: {
            '200': {
                description: 'Array of Student\'s belonging to Course',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Student) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CourseStudentController.prototype, "find", null);
__decorate([
    rest_1.post('/courses/{id}/students', {
        responses: {
            '200': {
                description: 'Course model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Student) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CourseStudentController.prototype, "create", null);
__decorate([
    rest_1.patch('/courses/{id}/students', {
        responses: {
            '200': {
                description: 'Course.Student PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student, { partial: true }),
            },
        },
    })),
    __param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Student))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CourseStudentController.prototype, "patch", null);
__decorate([
    rest_1.del('/courses/{id}/students', {
        responses: {
            '200': {
                description: 'Course.Student DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Student))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CourseStudentController.prototype, "delete", null);
CourseStudentController = __decorate([
    __param(0, repository_1.repository(repositories_1.CourseRepository)),
    __metadata("design:paramtypes", [repositories_1.CourseRepository])
], CourseStudentController);
exports.CourseStudentController = CourseStudentController;
//# sourceMappingURL=course-student.controller.js.map
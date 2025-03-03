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
let StudentController = class StudentController {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async create(student) {
        return await this.studentRepository.create(student);
    }
    async count(where) {
        return await this.studentRepository.count(where);
    }
    async find(filter) {
        return await this.studentRepository.find(filter);
    }
    async updateAll(student, where) {
        return await this.studentRepository.updateAll(student, where);
    }
    async findById(id) {
        return await this.studentRepository.findById(id);
    }
    async updateById(id, student) {
        await this.studentRepository.updateById(id, student);
    }
    async replaceById(id, student) {
        await this.studentRepository.replaceById(id, student);
    }
    async deleteById(id) {
        await this.studentRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/students', {
        responses: {
            '200': {
                description: 'Student model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Student) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    rest_1.get('/students/count', {
        responses: {
            '200': {
                description: 'Student model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Student))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "count", null);
__decorate([
    rest_1.get('/students', {
        responses: {
            '200': {
                description: 'Array of Student model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Student) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Student))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "find", null);
__decorate([
    rest_1.patch('/students', {
        responses: {
            '200': {
                description: 'Student PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Student))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Student, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/students/{id}', {
        responses: {
            '200': {
                description: 'Student model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Student) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findById", null);
__decorate([
    rest_1.patch('/students/{id}', {
        responses: {
            '204': {
                description: 'Student PATCH success',
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Student]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateById", null);
__decorate([
    rest_1.put('/students/{id}', {
        responses: {
            '204': {
                description: 'Student PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Student]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/students/{id}', {
        responses: {
            '204': {
                description: 'Student DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteById", null);
StudentController = __decorate([
    __param(0, repository_1.repository(repositories_1.StudentRepository)),
    __metadata("design:paramtypes", [repositories_1.StudentRepository])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map
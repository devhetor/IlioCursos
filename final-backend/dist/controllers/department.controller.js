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
let DepartmentController = class DepartmentController {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async create(department) {
        return await this.departmentRepository.create(department);
    }
    async count(where) {
        return await this.departmentRepository.count(where);
    }
    async find(filter) {
        return await this.departmentRepository.find(filter);
    }
    async updateAll(department, where) {
        return await this.departmentRepository.updateAll(department, where);
    }
    async findById(id) {
        return await this.departmentRepository.findById(id);
    }
    async updateById(id, department) {
        await this.departmentRepository.updateById(id, department);
    }
    async replaceById(id, department) {
        await this.departmentRepository.replaceById(id, department);
    }
    async deleteById(id) {
        await this.departmentRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/departments', {
        responses: {
            '200': {
                description: 'Department model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Department) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Department),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "create", null);
__decorate([
    rest_1.get('/departments/count', {
        responses: {
            '200': {
                description: 'Department model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Department))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "count", null);
__decorate([
    rest_1.get('/departments', {
        responses: {
            '200': {
                description: 'Array of Department model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Department) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Department))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "find", null);
__decorate([
    rest_1.patch('/departments', {
        responses: {
            '200': {
                description: 'Department PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Department, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Department))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Department, Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/departments/{id}', {
        responses: {
            '200': {
                description: 'Department model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Department) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findById", null);
__decorate([
    rest_1.patch('/departments/{id}', {
        responses: {
            '204': {
                description: 'Department PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Department, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Department]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateById", null);
__decorate([
    rest_1.put('/departments/{id}', {
        responses: {
            '204': {
                description: 'Department PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Department]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/departments/{id}', {
        responses: {
            '204': {
                description: 'Department DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "deleteById", null);
DepartmentController = __decorate([
    __param(0, repository_1.repository(repositories_1.DepartmentRepository)),
    __metadata("design:paramtypes", [repositories_1.DepartmentRepository])
], DepartmentController);
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map
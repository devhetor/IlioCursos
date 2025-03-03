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
const repositories_1 = require("../repositories");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let StudentAddressController = class StudentAddressController {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async createAddress(studentId, addressData) {
        return await this.studentRepository.address(studentId).create(addressData);
    }
};
__decorate([
    rest_1.post('/students/{id}/address'),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, models_1.Address]),
    __metadata("design:returntype", Promise)
], StudentAddressController.prototype, "createAddress", null);
StudentAddressController = __decorate([
    __param(0, repository_1.repository(repositories_1.StudentRepository)),
    __metadata("design:paramtypes", [repositories_1.StudentRepository])
], StudentAddressController);
exports.StudentAddressController = StudentAddressController;
//# sourceMappingURL=student-address.controller.js.map
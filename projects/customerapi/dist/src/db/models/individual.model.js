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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Individual = void 0;
const customer_model_1 = require("./customer.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const gender_enum_1 = require("./gender.enum");
let Individual = class Individual extends customer_model_1.Customer {
};
exports.Individual = Individual;
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Gender',
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(gender_enum_1.Gender)),
    }),
    __metadata("design:type", String)
], Individual.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: 'DOB'
    }),
    __metadata("design:type", Date)
], Individual.prototype, "dob", void 0);
exports.Individual = Individual = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Individual'
    })
], Individual);

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
exports.Corporate = void 0;
const customer_model_1 = require("./customer.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const companytype_enum_1 = require("./companytype.enum");
let Corporate = class Corporate extends customer_model_1.Customer {
};
exports.Corporate = Corporate;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(companytype_enum_1.CompanyType)),
        field: 'Company_Type'
    }),
    __metadata("design:type", String)
], Corporate.prototype, "companyType", void 0);
exports.Corporate = Corporate = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Corporate'
    })
], Corporate);

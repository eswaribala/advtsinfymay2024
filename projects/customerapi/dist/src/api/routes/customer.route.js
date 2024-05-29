"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = __importDefault(require("../controllers/customer.controller"));
class CustomerRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.customerController = new customer_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/v1.0", this.customerController.create);
    }
}
exports.default = new CustomerRoute().router;

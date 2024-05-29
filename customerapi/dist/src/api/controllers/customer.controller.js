"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_repository_1 = __importDefault(require("../../db/repositories/customer.repository"));
const customer_request_1 = require("../../db/dtos/customer.request");
class CustomerController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //validation
            if (!req.body.firstName) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
                return;
            }
            let customer = req.body;
            try {
                const savedResponse = yield customer_repository_1.default.addCustomer(customer);
                return res.status(201).send({
                    'data': savedResponse,
                    'message': 'customer successfully created'
                });
            }
            catch (error) {
                return res.status(500).send({
                    'message': `customer could not be created ${error}`
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(typeof req.query.mobileNo)
            const firstName = typeof req.query.firstName === "string" ? req.query.firstName : "";
            const mobileNo = typeof req.query.mobileNo === "string" ? req.query.mobileNo : "0";
            //validation
            if (!firstName) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
                return;
            }
            let contactNo = parseInt(mobileNo);
            try {
                const customers = yield customer_repository_1.default.findAllCustomers({ firstName: firstName, contactNo: contactNo });
                return res.status(200).send(customers);
            }
            catch (error) {
                return res.status(500).send({
                    'message': `customer not found ${error}`
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerId = parseInt(req.params.id);
            //validation
            if (customerId <= 0) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
                return;
            }
            try {
                const customer = yield customer_repository_1.default.findCustomerById(customerId);
                return res.status(200).send(customer);
            }
            catch (error) {
                return res.status(500).send({
                    'message': `customer not found ${error}`
                });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerId = parseInt(req.params.id);
            //validation
            if (customerId <= 0) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
                return;
            }
            try {
                const data = yield customer_repository_1.default.deleteCustomerById(customerId);
                return res.status(200).send(data);
            }
            catch (error) {
                return res.status(500).send({
                    'message': `customer not found ${error}`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield customer_repository_1.default.deleteAllCustomers();
                if (data) {
                    return res.status(200).send({
                        message: 'All the customers deleted'
                    });
                }
                else {
                    return res.status(500).send({
                        message: 'Not deleted'
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    'message': `customer not found ${error}`
                });
            }
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = typeof req.body.email === "string" ? req.body.email : "";
            const mobileNo = typeof req.body.mobileNo === "number" ? req.body.mobileNo : 0;
            const customerId = typeof req.body.customerId === "number" ? req.body.customerId : 0;
            console.log(typeof (mobileNo));
            let updateRequest = new customer_request_1.UpdateRequest(email, mobileNo, customerId);
            //validation
            if (!email) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
                return;
            }
            try {
                const data = yield customer_repository_1.default.updateCustomer(updateRequest);
                return res.status(200).send(data);
            }
            catch (error) {
                return res.status(500).send({
                    'message': `customer not found ${error}`
                });
            }
        });
    }
}
exports.default = CustomerController;

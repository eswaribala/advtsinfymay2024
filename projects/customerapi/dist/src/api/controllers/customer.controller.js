"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_repository_1 = __importDefault(require("../../db/repositories/customer.repository"));
class CustomerController {
    create(req, res) {
        console.log(req.body);
        //validation
        if (!req.body.firstName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        let customer = req.body;
        let savedResponse;
        try {
            savedResponse = customer_repository_1.default.addCustomer(customer);
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
    }
}
exports.default = CustomerController;

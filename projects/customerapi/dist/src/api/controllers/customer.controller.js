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
}
exports.default = CustomerController;

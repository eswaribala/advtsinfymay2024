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
Object.defineProperty(exports, "__esModule", { value: true });
const customer_model_1 = require("../models/customer.model");
class CustomerRepository {
    addCustomer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield customer_model_1.Customer.create({
                    firstName: customer.firstName,
                    middleName: customer.middleName,
                    lastName: customer.lastName,
                    email: customer.email,
                    password: customer.password,
                    contactNo: customer.contactNo
                });
            }
            catch (error) {
                throw new Error("Failed to create Customer!");
            }
        });
    }
}
exports.default = new CustomerRepository();

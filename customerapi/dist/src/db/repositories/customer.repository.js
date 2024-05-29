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
const sequelize_1 = require("sequelize");
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
    deleteAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rows = yield customer_model_1.Customer.destroy({
                    where: {},
                    truncate: false
                });
                if (rows > 0)
                    return true;
                else
                    return false;
            }
            catch (error) {
                throw new Error("Failed to delete all customers!");
            }
        });
    }
    deleteCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rows = yield customer_model_1.Customer.destroy({
                    where: {
                        customerId: id,
                    },
                });
                if (rows > 0)
                    return `Customer with Id=${id} deleted`;
                else
                    return `Customer with Id=${id} not found`;
            }
            catch (error) {
                throw new Error("Failed to delete customers!");
            }
        });
    }
    findAllCustomers(searchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield customer_model_1.Customer.findAll({
                    where: {
                        [sequelize_1.Op.and]: [{ firstName: searchParams.firstName }, { contactNo: searchParams.contactNo }],
                    },
                });
            }
            catch (error) {
                throw new Error("Failed to find all customers!");
            }
        });
    }
    findCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield customer_model_1.Customer.findByPk(id);
            }
            catch (error) {
                throw new Error("Failed to find customer!");
            }
        });
    }
    updateCustomer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            try {
                yield customer_model_1.Customer.update({ email: data.email, contactNo: data.contactNo }, {
                    where: {
                        customerId: data.customerId,
                    },
                });
                return yield this.findCustomerById(data.customerId);
            }
            catch (error) {
                throw new Error("Failed to update customer!");
            }
        });
    }
}
exports.default = new CustomerRepository();

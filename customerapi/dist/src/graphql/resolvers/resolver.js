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
exports.root = void 0;
const customer_model_1 = require("../../db/models/customer.model");
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_model_1.Customer.findAll();
});
const getCustomerById = (args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_model_1.Customer.findByPk(args.id);
});
/*
const addCustomer=async (args: {
    firstName: string, middleName: string, lastName: string, contactNo: number,
    email:string,password:number
}):Promise<Customer>=>{
      console.log(args)
     return await Customer.create({
        firstName:args.firstName,
        middleName:args.middleName,
        lastName:args.lastName,
        email:args.email,
        password:args.password,
        contactNo:args.contactNo
    })

}

 */
const addCustomer = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(args.customerInput);
    return yield customer_model_1.Customer.create({
        firstName: args.customerInput.firstName,
        middleName: args.customerInput.middleName,
        lastName: args.customerInput.lastName,
        email: args.customerInput.email,
        password: args.customerInput.password,
        contactNo: args.customerInput.contactNo
    });
});
exports.root = {
    getAllCustomers,
    getCustomerById,
    addCustomer
};

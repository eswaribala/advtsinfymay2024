"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`

  type Customer{
     customerId:Int
     firstName:String
     middleName:String
     lastName:String
     email:String
     contactNo:Int
     password:String
  }
  input CustomerInput{
   firstName:String
     middleName:String
     lastName:String
     email:String
     contactNo:Int
     password:String
  }
  
  type Query{
     getAllCustomers:[Customer]
     getCustomerById(id:Int):Customer  
  
  }
  
  type Mutation{
     addCustomer(customerInput:CustomerInput):Customer
  }
  

`);
exports.default = schema;
// addCustomer(firstName: String!, middleName: String!, lastName: String, contactNo: Int!,email:String,password:String):Customer

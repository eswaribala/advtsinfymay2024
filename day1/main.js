"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var individual_1 = require("./userdefined/individual");
var gender_1 = require("./basics/gender");
var branch_1 = require("./userdefined/branch");
var autoGenerator_1 = require("./userdefined/autoGenerator");
var individual = new individual_1.Individual(autoGenerator_1.AutoGenerator.generateAccountNo(5, 1), "Parameswari", "Bala", 8056050412, "param@gmail.com", "Test@123", [], gender_1.Gender.FEMALE, new Date(1970, 12, 2));
console.log(individual);
//static property can be accessesd directly using class Name
branch_1.Branch._ifscCode = "SBI000789";
console.log(autoGenerator_1.AutoGenerator.getOTP());
//runtime polymorphism
//upcasting
//let customer:Customer=individual;
//console.log(customer);
//let customerObj:Customer=new Customer(Math.floor(Math.random()*8000)
//   ,"Parameswari","Bala",8056050412,
//  "param@gmail.com","Test@123",[]);
//downcasting
//supertype assigned to sub type
//super type cannot access sub type properties
//let individualObj:Individual=customerObj;

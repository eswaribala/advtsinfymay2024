"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var individual_1 = require("./userdefined/individual");
var gender_1 = require("./basics/gender");
var individual = new individual_1.Individual(Math.floor(Math.random() * 8000), "Parameswari", "Bala", 8056050412, "param@gmail.com", "Test@123", [], gender_1.Gender.FEMALE, new Date(1970, 12, 2));
//runtime polymorphism
var customer = individual;
console.log(customer);

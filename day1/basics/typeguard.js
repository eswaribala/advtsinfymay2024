"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var individual_1 = require("../userdefined/individual");
var autoGenerator_1 = require("../userdefined/autoGenerator");
var gender_1 = require("./gender");
var corporate_1 = require("../userdefined/corporate");
var companyType_1 = require("./companyType");
var individual = new individual_1.Individual(autoGenerator_1.AutoGenerator.generateAccountNo(5, 1), "Parameswari", "Bala", 8056050412, "param@gmail.com", "Test@123", [], gender_1.Gender.FEMALE, new Date(1970, 12, 2));
var corporate = new corporate_1.Corporate(autoGenerator_1.AutoGenerator.generateAccountNo(5, 1), "Parameswari", "Bala", 8056050412, "param@gmail.com", "Test@123", [], companyType_1.CompanyType.GOV);
function isIndividual(customer) {
    return 'gender' in customer;
}
function choiceCheck(customer) {
    if (isIndividual(customer)) {
        console.log("Gender=".concat(gender_1.Gender[customer.gender]));
    }
    else {
        console.log("Company Type=".concat(companyType_1.CompanyType[customer.companyType]));
    }
}
//type guard
choiceCheck(corporate);
choiceCheck(individual);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var individual_1 = require("../userdefined/individual");
var corporate_1 = require("../userdefined/corporate");
var autoGenerator_1 = require("../userdefined/autoGenerator");
var gender_1 = require("./gender");
var companyType_1 = require("./companyType");
var data;
var choices = ['individual', 'corporate'];
var genChoice = Math.floor(Math.random() * (2 - 0));
console.log(choices[genChoice]);
var guess = function (choice) {
    switch (choice) {
        case 'individual':
            data = new individual_1.Individual(autoGenerator_1.AutoGenerator.generateAccountNo(5, 1), "Parameswari", "Bala", 8056050412, "param@gmail.com", "Test@123", [], gender_1.Gender.FEMALE, new Date(1970, 12, 2));
            break;
        case 'corporate':
            data = new corporate_1.Corporate(autoGenerator_1.AutoGenerator.generateAccountNo(5, 1), "Parameswari", "Bala", 8056050412, "param@gmail.com", "Test@123", [], companyType_1.CompanyType.GOV);
            break;
    }
    return data;
};
console.log(guess(choices[genChoice]));

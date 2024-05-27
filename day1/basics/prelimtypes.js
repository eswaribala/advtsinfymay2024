"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//variables
var gender_1 = require("./gender");
var accountNo;
var firstName;
var lastName;
var address;
var contactNo;
var email;
var password;
var gender;
//static type checking
accountNo = Math.floor(Math.random() * 10000);
firstName = 'Parameswari';
lastName = 'Bala';
address = {
    "doorNo": '4858',
    "streetName": "First St",
    "city": "Chennai"
};
contactNo = 9952032876;
email = 'param@gmail.com';
password = 'Test@123';
gender = gender_1.Gender.FEMALE;
console.log("The Account No=".concat(accountNo));
console.log("First Name=".concat(firstName));
console.log("Last Name=".concat(lastName));
//console.log(`Address=${address}`);
Object.keys(address).forEach(function (key) {
    console.log("".concat(key, "=").concat(address[key]));
});
console.log("Contact No=".concat(contactNo));
console.log("Email=".concat(email));
console.log("Password=".concat(password));
console.log("Gender=".concat(gender_1.Gender[gender]));

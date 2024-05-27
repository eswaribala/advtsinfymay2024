"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./userdefined/customer");
var address_1 = require("./userdefined/address");
var doorNos = ["1", "13D", "22F"];
var streetNames = ["Rajaji St", "First St", "Gandhi Road"];
var cities = ["Chennai", "Bangalore", "Pune"];
var states = ["TN", "KN", "MH"];
//array size declaration
var addresses = new Array(3);
//let's create function returns addresses
function getAddresses() {
    for (var i = 0; i < 3; i++) {
        addresses[i] = new address_1.Address(doorNos[i], streetNames[i], cities[i], states[i]);
    }
    return addresses;
}
//spread operator
//assign anonymous function to variable
//default values
var printAddresses = function (contactNo, country) {
    if (country === void 0) { country = "India"; }
    var addresses = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        addresses[_i - 2] = arguments[_i];
    }
    console.log("Contact No=".concat(contactNo));
    addresses.forEach(function (address) {
        console.log(address);
    });
    console.log("Country Name=".concat(country));
};
var customer = new customer_1.Customer(Math.floor(Math.random() * 300), "Parameswari", "Bala", 9952032876, "param@gmail.com", "Test@123", getAddresses());
//console.log(customer);
//invoke spread operator
printAddresses(9952032876);
//one address
printAddresses(9952032875, "", getAddresses()[0]);
//two addresses
printAddresses(9952032874, "Australia", getAddresses()[0], getAddresses()[1]);
//three addresses
printAddresses(9952032873, "Singapore", getAddresses()[0], getAddresses()[1], getAddresses()[2]);
/*
let values:Address[];
Object.keys(customer).forEach(key=>{
   if(key=='_addresses'){
       values=customer[key];
       values.forEach(address=>{
           console.log(address);
       })
   }
   else
    console.log(`${key}=${customer[key]}`)
})

 */

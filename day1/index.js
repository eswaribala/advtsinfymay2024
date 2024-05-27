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
for (var i = 0; i < 3; i++) {
    addresses[i] = new address_1.Address(doorNos[i], streetNames[i], cities[i], states[i]);
}
var customer = new customer_1.Customer(Math.floor(Math.random() * 300), "Parameswari", "Bala", 9952032876, "param@gmail.com", "Test@123", addresses);
console.log(customer);
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

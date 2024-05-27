import {Individual} from "./userdefined/individual";
import {Gender} from "./basics/gender";
import {Customer} from "./userdefined/customer";
import {Branch} from "./userdefined/branch";
import {AutoGenerator} from "./userdefined/autoGenerator";

let individual:Individual=new Individual(AutoGenerator.generateAccountNo(5,1)
    ,"Parameswari","Bala",8056050412,
    "param@gmail.com","Test@123",[],Gender.FEMALE,
    new Date(1970,12,2))
Customer.interestRate=0.7

console.log(individual);


//static property can be accessesd directly using class Name
Branch._ifscCode="SBI000789";
console.log(AutoGenerator.getOTP());

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
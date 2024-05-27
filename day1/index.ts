import {Customer} from "./userdefined/customer";
import {Address} from "./userdefined/address";

let doorNos:string[]=["1","13D","22F"]
let streetNames:string[]=["Rajaji St","First St","Gandhi Road"]
let cities:string[]=["Chennai","Bangalore","Pune"]
let states:string[]=["TN","KN","MH"];
//array size declaration
let addresses:Address[]=new Array(3);
for(let i=0;i<3;i++){
    addresses[i]=new Address(doorNos[i],streetNames[i],cities[i],
        states[i]);
}


let customer:Customer=new Customer(Math.floor(Math.random()*300),
    "Parameswari","Bala",9952032876,
    "param@gmail.com","Test@123",addresses);
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

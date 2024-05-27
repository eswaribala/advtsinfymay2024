import {Customer} from "./userdefined/customer";
import {Address} from "./userdefined/address";

let doorNos:string[]=["1","13D","22F"]
let streetNames:string[]=["Rajaji St","First St","Gandhi Road"]
let cities:string[]=["Chennai","Bangalore","Pune"]
let states:string[]=["TN","KN","MH"];
//array size declaration
let addresses:Address[]=new Array(3);


//let's create function returns addresses

function getAddresses():Address[]{
    for(let i=0;i<3;i++){
        addresses[i]=new Address(doorNos[i],streetNames[i],cities[i],
            states[i]);
    }
    return addresses;
}

//spread operator
//assign anonymous function to variable
//default values
let printAddresses=function(contactNo:number,country:string="India", ...addresses:Address[]):void{
    console.log(`Contact No=${contactNo}`)
    addresses.forEach(address=>{
        console.log(address);
    })
    console.log(`Country Name=${country}`)
}



let customer:Customer=new Customer(Math.floor(Math.random()*300),
    "Parameswari","Bala",9952032876,
    "param@gmail.com","Test@123",getAddresses());
//console.log(customer);

//invoke spread operator

printAddresses(9952032876);
//one address
printAddresses(9952032875,"",getAddresses()[0]);
//two addresses
printAddresses(9952032874,"Australia",getAddresses()[0],getAddresses()[1]);
//three addresses
printAddresses(9952032873,"Singapore",getAddresses()[0],getAddresses()[1],getAddresses()[2]);


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

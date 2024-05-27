//variables
import {Gender} from "./gender";

let accountNo:number;
let firstName:string;
let lastName:string;
let address:object;
let contactNo:number;
let email:string;
let password:string;
let gender:Gender;

//static type checking
accountNo=Math.floor(Math.random()*10000);
firstName='Parameswari'
lastName='Bala'
address={
    "doorNo":'4858',
    "streetName":"First St",
    "city":"Chennai"
}
contactNo=9952032876
email='param@gmail.com';
password='Test@123';
gender=Gender.FEMALE;

console.log(`The Account No=${accountNo}`);
console.log(`First Name=${firstName}`);
console.log(`Last Name=${lastName}`);
//console.log(`Address=${address}`);
Object.keys(address).forEach(key=>{
    console.log(`${key}=${address[key as keyof typeof address]}`)
})

console.log(`Contact No=${contactNo}`);
console.log(`Email=${email}`);
console.log(`Password=${password}`);
console.log(`Gender=${Gender[gender]}`);
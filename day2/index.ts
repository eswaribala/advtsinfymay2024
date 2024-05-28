import {EmployeeController} from "./business/employeecontroller";
import {ResponseWrapper} from "./dtos/response.wrapper";
import {Individual} from "../day1/userdefined/individual";
import {AutoGenerator} from "../day1/userdefined/autoGenerator";
import {Gender} from "../day1/basics/gender";
import {Corporate} from "../day1/userdefined/corporate";
import {CompanyType} from "../day1/basics/companyType";

let endpoint:string="https://dummy.restapiexample.com/api/v1/employees";
// @ts-ignore
async function execApi():Promise<void>{
   let response:ResponseWrapper<object, string>= await new
   EmployeeController().fetchEmployees(endpoint);
   console.log(response.data);
}
//invoke the function
execApi();


let individual:Individual=new Individual(AutoGenerator.generateAccountNo(5,1)
    ,"Parameswari","Bala",8056050412,
    "param@gmail.com","Test@123",[],Gender.FEMALE,
    new Date(1970,12,2))

let responseIndividualObject:ResponseWrapper<Individual, boolean>=new
ResponseWrapper<Individual, boolean>(individual,true);

console.log(responseIndividualObject);

let corporate:Corporate=new Corporate(AutoGenerator.generateAccountNo(5,1)
    ,"Parameswari","Bala",8056050412,
    "param@gmail.com","Test@123",[],CompanyType.GOV)
let responseCorporateObject:ResponseWrapper<Corporate, string>=new
ResponseWrapper<Corporate, string>(corporate,"Object Ready");

console.log(responseCorporateObject);
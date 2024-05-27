import {Individual} from "../userdefined/individual";
import {AutoGenerator} from "../userdefined/autoGenerator";
import {Gender} from "./gender";
import {Corporate} from "../userdefined/corporate";
import {CompanyType} from "./companyType";

let individual:Individual=new Individual(AutoGenerator.generateAccountNo(5,1)
    ,"Parameswari","Bala",8056050412,
    "param@gmail.com","Test@123",[],Gender.FEMALE,
    new Date(1970,12,2))

let corporate:Corporate=new Corporate(AutoGenerator.generateAccountNo(5,1)
    ,"Parameswari","Bala",8056050412,
    "param@gmail.com","Test@123",[],CompanyType.GOV)

function isIndividual(customer: Individual|Corporate):customer is Individual{
    return 'gender' in customer
}

function choiceCheck(customer:Individual|Corporate):void{
    if(isIndividual(customer)){
        console.log(`Gender=${Gender[customer.gender]}`);
    }else
    {
        console.log(`Company Type=${CompanyType[customer.companyType]}`)
    }

}
//type guard
choiceCheck(corporate)
choiceCheck(individual)




import {Individual} from "../userdefined/individual";
import {Corporate} from "../userdefined/corporate";
import {AutoGenerator} from "../userdefined/autoGenerator";
import {Gender} from "./gender";
import {CompanyType} from "./companyType";

let data:Individual|Corporate

let choices:string[]=['individual','corporate'];

let genChoice=Math.floor(Math.random()*(2-0))

console.log(choices[genChoice]);

let guess=(choice:string):(Individual|Corporate)=>{

    switch(choice){
        case 'individual':
            data=new Individual(AutoGenerator.generateAccountNo(5,1)
                ,"Parameswari","Bala",8056050412,
                "param@gmail.com","Test@123",[],Gender.FEMALE,
                new Date(1970,12,2))
            break;
        case 'corporate':
            data=new Corporate(AutoGenerator.generateAccountNo(5,1)
                ,"Parameswari","Bala",8056050412,
                "param@gmail.com","Test@123",[],CompanyType.GOV)

            break;
    }
    return data

}

console.log(guess(choices[genChoice]));
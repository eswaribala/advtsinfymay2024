import {Customer} from "./customer";
import {Gender} from "../basics/gender";
import {Address} from "./address";

export class Individual extends Customer{

    private _gender:Gender;
    private _dob: Date;


    constructor(accountNo: number, firstName: string, lastName: string, contactNo: number, email: string, password: string, addresses: Address[], gender: Gender, dob: Date) {
        super(accountNo, firstName, lastName, contactNo, email, password, addresses);
        this._gender = gender;
        this._dob = dob;
    }


    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get dob(): Date {
        return this._dob;
    }

    set dob(value: Date) {
        this._dob = value;
    }
}
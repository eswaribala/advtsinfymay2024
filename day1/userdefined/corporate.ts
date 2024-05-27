import {Customer} from "./customer";
import {CompanyType} from "../basics/companyType";
import {Address} from "./address";

export class Corporate extends Customer{
    private _companyType:CompanyType;


    constructor(accountNo: number, firstName: string, lastName: string, contactNo: number, email: string, password: string, addresses: Address[], companyType: CompanyType) {
        super(accountNo, firstName, lastName, contactNo, email, password, addresses);
        this._companyType = companyType;
    }


    get companyType(): CompanyType {
        return this._companyType;
    }

    set companyType(value: CompanyType) {
        this._companyType = value;
    }
}
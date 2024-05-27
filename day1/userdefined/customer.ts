import {Address} from "./address";

export class Customer{
    private _accountNo:number;
    private _firstName:string;
    private _lastName:string;
    private _contactNo:number;
    private _email:string;
    private _password:string;
    private _addresses:Address[];


    constructor(accountNo: number, firstName: string, lastName: string, contactNo: number, email: string, password: string, addresses: Address[]) {
        this._accountNo = accountNo;
        this._firstName = firstName;
        this._lastName = lastName;
        this._contactNo = contactNo;
        this._email = email;
        this._password = password;
        this._addresses = addresses;
    }


    get accountNo(): number {
        return this._accountNo;
    }

    set accountNo(value: number) {
        this._accountNo = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get contactNo(): number {
        return this._contactNo;
    }

    set contactNo(value: number) {
        this._contactNo = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get addresses(): Address[] {
        return this._addresses;
    }

    set addresses(value: Address[]) {
        this._addresses = value;
    }
}
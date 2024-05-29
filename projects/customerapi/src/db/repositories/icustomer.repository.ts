import {Customer} from "../models/customer.model";

export interface ICustomerRepository{

    addCustomer(customer:Customer):Promise<Customer>
    findAllCustomers(searchParams:{firstName:string,contactNo:number}):Promise<Customer[]>
    findCustomerById(id:number):Promise<Customer|null>
    updateCustomer(email:string,contactNo:number,id:number):Promise<Customer>
    deleteCustomerById(id:number):Promise<string>
    deleteAllCustomers():Promise<boolean>

}
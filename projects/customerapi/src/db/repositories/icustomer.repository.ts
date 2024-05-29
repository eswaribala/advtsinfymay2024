import {Customer} from "../models/customer.model";

export interface ICustomerRepository{

    addCustomer(customer:Customer):Promise<Customer>

}
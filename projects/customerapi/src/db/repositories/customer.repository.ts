import {ICustomerRepository} from "./icustomer.repository";
import {Customer} from "../models/customer.model";

class CustomerRepository implements ICustomerRepository{
    async addCustomer(customer: Customer): Promise<Customer> {
       try{
           return await Customer.create({
               firstName:customer.firstName,
               middleName:customer.middleName,
               lastName:customer.lastName,
               email:customer.email,
               password:customer.password,
               contactNo:customer.contactNo
           })

       }catch(error){
           throw new Error("Failed to create Customer!");
       }
    }

}

export default new CustomerRepository();
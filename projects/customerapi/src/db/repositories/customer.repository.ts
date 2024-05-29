import {ICustomerRepository} from "./icustomer.repository";
import {Customer} from "../models/customer.model";
import {Error, Op} from "sequelize";

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

    deleteAllCustomers(): Promise<boolean> {
        return Promise.resolve(false);
    }

    deleteCustomerById(id: number): Promise<string> {
        return Promise.resolve("");
    }

    async findAllCustomers(searchParams: { firstName: string; contactNo: number }): Promise<Customer[]> {

        return await Customer.findAll({
            where: {
                [Op.and]: [{ firstName: searchParams.firstName }, { contactNo: searchParams.contactNo }],
            },
        });
    }

    async findCustomerById(id: number): Promise<Customer|null> {
        return  await Customer.findByPk(id)
    }

    updateCustomer(email: string, contactNo: number, id: number): Promise<Customer> {
        return Promise.resolve(undefined);
    }

}

export default new CustomerRepository();
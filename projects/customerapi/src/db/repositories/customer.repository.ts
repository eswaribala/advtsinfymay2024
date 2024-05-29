import {ICustomerRepository} from "./icustomer.repository";
import {Customer} from "../models/customer.model";
import {Op} from "sequelize";


class CustomerRepository implements ICustomerRepository{
    async addCustomer(customer: Customer): Promise<Customer|never> {
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
    async deleteAllCustomers(): Promise<boolean> {
        try {
            const rows=await  Customer.destroy({
                where: {},
                truncate: false
            });
            if(rows>0)
                return true
            else
                return false
        } catch (error) {
            throw new Error("Failed to delete all customers!");
        }
    }

    async deleteCustomerById(id: number): Promise<string> {
        try {
            const rows = await Customer.destroy({
                where: {
                    customerId: id,
                },
            });
            if (rows > 0)
                return `Customer with Id=${id} deleted`
            else
                return `Customer with Id=${id} not found`
        }catch(error){
            throw new Error("Failed to delete customers!");
        }
    }

    async findAllCustomers(searchParams: { firstName: string; contactNo: number }): Promise<Customer[]> {

        try {
            return await Customer.findAll({
                where: {
                    [Op.and]: [{firstName: searchParams.firstName}, {contactNo: searchParams.contactNo}],
                },
            });
        }catch(error){
            throw new Error("Failed to find all customers!");
        }
    }

    async findCustomerById(id: number): Promise<Customer|null> {
        try {
            return await Customer.findByPk(id)
        }catch(error){
            throw new Error("Failed to find customer!");
        }
    }

    async updateCustomer(email: string, contactNo: number, id: number): Promise<Customer|null> {
        try {
            await Customer.update(
                {email: email, contactNo: contactNo},
                {
                    where: {
                        customerId: id,
                    },
                },
            );
            return await this.findCustomerById(id)
        }catch(error){
            throw new Error("Failed to update customer!");
        }
    }



}

export default new CustomerRepository();
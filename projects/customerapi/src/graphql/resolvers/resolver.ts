import {Customer} from "../../db/models/customer.model";

const getAllCustomers=async ():Promise<Customer[]>=>{

    return await Customer.findAll()
}

const getCustomerById=async (id:number):Promise<Customer|null>=>{
    return await Customer.findByPk(id)

}

const addCustomer=async (customer:Customer):Promise<Customer>=>{

     return await Customer.create({
        firstName:customer.firstName,
        middleName:customer.middleName,
        lastName:customer.lastName,
        email:customer.email,
        password:customer.password,
        contactNo:customer.contactNo
    })

}

export const root={
    getAllCustomers,
    getCustomerById,
    addCustomer

}
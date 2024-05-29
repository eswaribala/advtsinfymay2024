import {Customer} from "../../db/models/customer.model";

const getAllCustomers=async ():Promise<Customer[]>=>{

    return await Customer.findAll()
}

const getCustomerById=async (args:{id:number}):Promise<Customer|null>=>{
    return await Customer.findByPk(args.id)

}
/*
const addCustomer=async (args: {
    firstName: string, middleName: string, lastName: string, contactNo: number,
    email:string,password:number
}):Promise<Customer>=>{
      console.log(args)
     return await Customer.create({
        firstName:args.firstName,
        middleName:args.middleName,
        lastName:args.lastName,
        email:args.email,
        password:args.password,
        contactNo:args.contactNo
    })

}

 */
const addCustomer=async (args: {
    customerInput:any
}):Promise<Customer>=>{
    console.log(args.customerInput)
    return await Customer.create({
        firstName:args.customerInput.firstName,
        middleName:args.customerInput.middleName,
        lastName:args.customerInput.lastName,
        email:args.customerInput.email,
        password:args.customerInput.password,
        contactNo:args.customerInput.contactNo
    })

}
export const root={
    getAllCustomers,
    getCustomerById,
    addCustomer

}
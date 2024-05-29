import {buildSchema} from 'graphql'

const schema=buildSchema(`

  type Customer{
     customerId:Int
     firstName:String
     middleName:String
     lastName:String
     email:String
     contactNo:Int
     password:String
  }
  input CustomerInput{
   firstName:String
     middleName:String
     lastName:String
     email:String
     contactNo:Int
     password:String
  }
  
  type CustomerQuery{
     getAllCustomers():Customer[]
     getCustomerById(id:Int):Customer  
  
  }
  
  type CustomerMutation{
    addCustomer(customerInput:CustomerInput):Customer
  }
  

`)

export default schema;
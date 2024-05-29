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
  
  type Query{
     getAllCustomers:[Customer]
     getCustomerById(id:Int):Customer  
  
  }
  
  type Mutation{
     addCustomer(customerInput:CustomerInput):Customer
  }
  

`)

export default schema;

// addCustomer(firstName: String!, middleName: String!, lastName: String, contactNo: Int!,email:String,password:String):Customer
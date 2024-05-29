import {Request,Response} from "express";
import customerRepository from "../../db/repositories/customer.repository";
import {Customer} from "../../db/models/customer.model";
export default class CustomerController{

    create(req:Request,res:Response){
        console.log(req.body)
        //validation
        if (!req.body.firstName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        let customer:Customer=req.body;
        let savedResponse:any;
        try{

             savedResponse= customerRepository.addCustomer(customer);
             return res.status(201).send({
                 'data':savedResponse,
                 'message':'customer successfully created'
             })

        }catch(error){
            return res.status(500).send({

                'message': `customer could not be created ${error}`
            })
        }


    }



}
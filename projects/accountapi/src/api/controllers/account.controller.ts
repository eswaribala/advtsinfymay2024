import {Request,Response} from "express";
import {consume} from "../../kafkaconsumer";

export default class AccountController {


    async dataConsumer(req:Request,res:Response){
       try {
           let response = await consume()
           res.status(200).send(JSON.stringify(response))
       }catch(error){
           res.status(200).send(error)
       }

    }

}
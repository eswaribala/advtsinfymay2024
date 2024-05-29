import {Request,Response} from "express";
import {consume} from "../../kafka/consumer";



export default class AccountController {


    async consumeData(req:Request,res:Response){

        try {
            let response = await consume()
            res.status(200).send(response);
        }catch(error){
            res.status(500).send(error);
        }
    }

}
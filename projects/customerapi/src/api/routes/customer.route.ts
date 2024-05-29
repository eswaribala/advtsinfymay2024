import {Router} from "express";
import CustomerController from "../controllers/customer.controller";

class CustomerRoute{
    router:Router;
    customerController:CustomerController;

    constructor() {
        this.router = Router();
        this.customerController=new CustomerController();
        this.initializeRoutes()
    }

    initializeRoutes(){

        this.router.post("/v1.0",this.customerController.create)

    }

}


export default new CustomerRoute().router
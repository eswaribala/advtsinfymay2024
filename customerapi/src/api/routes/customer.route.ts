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
        this.router.get("/v1.0",this.customerController.findAll)
        this.router.get("/v1.0/:id",this.customerController.findById)
        this.router.put("/v1.0",this.customerController.updateCustomer)
        this.router.delete("/v1.0",this.customerController.deleteAll)
        this.router.delete("/v1.0/:id",this.customerController.deleteById)
        this.router.get("/v1.0/publish/:id",this.customerController.publishData)
    }

}


export default new CustomerRoute().router
import {Router} from "express";
import AccountController from "../controllers/account.controller";

class AccountRoute {
    router:Router;
    customerController:AccountController;

    constructor() {
        this.router = Router();
        this.customerController=new AccountController();
        this.initializeRoutes()
    }

    initializeRoutes(){


        this.router.get("/v1.0/consume",this.customerController.consumeData)
    }

}


export default new AccountRoute().router
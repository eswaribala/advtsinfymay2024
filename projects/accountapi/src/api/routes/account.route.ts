import {Router} from "express";
import AccountController from "../controllers/account.controller";

class AccountRoute {
    router:Router;
    accountController:AccountController;

    constructor() {
        this.router = Router();
        this.accountController=new AccountController();
        this.initializeRoutes()
    }

    initializeRoutes(){
         this.router.get("/v1.0/consume",this.accountController.dataConsumer)

    }

}


export default new AccountRoute().router
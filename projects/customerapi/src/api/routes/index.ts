import {Application} from "express";
import customerRoute from "./customer.route";
import corporateRoutes from "./corporate.routes";

export class Routes{
    constructor(app:Application) {
        app.use("/api/customers",customerRoute)
        app.use("/api/corporates",corporateRoutes)
    }
}
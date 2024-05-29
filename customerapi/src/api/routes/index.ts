import {Application} from "express";
import customerRoute from "./customer.route";

export class Routes{
    constructor(app:Application) {
        app.use("/api/customers",customerRoute)
    }
}
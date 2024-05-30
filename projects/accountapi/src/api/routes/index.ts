import {Application} from "express";
import accountRoute from "./account.route";

export class Routes{
    constructor(app:Application) {
        app.use("/api/customers",accountRoute)
    }
}
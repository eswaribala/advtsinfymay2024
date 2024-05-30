import {Application} from "express";
import cors,{CorsOptions} from "cors";
import express from 'express'
import {Routes} from "./api/routes";

export class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }

    config(app: Application) {
        const corsOptions: CorsOptions = {
            origin: "http://localhost:3300"
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

    }
}
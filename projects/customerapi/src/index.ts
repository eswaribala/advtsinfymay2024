import {DatabaseConnection} from "./db";
import {Application} from "express";
import cors,{CorsOptions} from "cors";
import express from 'express'
import {Routes} from "./api/routes";
import {graphqlHTTP} from "express-graphql";
import schema from "./graphql/schemas/schema";
import {root} from "./graphql/resolvers/resolver";
export class Server{
    constructor(app:Application) {
        this.config(app);
        this.syncDatabase();
        new Routes(app);
    }

    config(app:Application){
        const corsOptions: CorsOptions = {
            origin: "http://localhost:3001"
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(
            "/graphql",
            graphqlHTTP({
               schema:schema,
                rootValue: root,
                graphiql: true
            })
        );

    }

    syncDatabase(){
        new DatabaseConnection().sequelize?.sync();
    }
}
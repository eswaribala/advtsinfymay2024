import {Sequelize} from "sequelize-typescript";
import {config,dialect} from "../config";
import {createConnection} from "net";

class DatabaseConnection{
    sequelize:Sequelize|undefined;
    constructor() {
       console.log(`Host=${config.HOST}`)
        this.createConnection()

    }

    createConnection(){
        this.sequelize=new Sequelize({
            database:config.DB,
            port: config.PORT,
            host:config.HOST,
            username:config.USER,
            password:config.PASSWORD,
            dialect:dialect,
            pool:{
                max:config.pool.max,
                min:config.pool.min,
                acquire:config.pool.acquire,
                idle:config.pool.idle
            }
        })
        this.sequelize.authenticate().then(response=>{
            console.log("DB Connection Ready")
        }).catch(error=>{
            console.log("DB Connection Error")
        })

    }



}
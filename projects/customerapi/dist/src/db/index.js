"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config");
const customer_model_1 = require("./models/customer.model");
const individual_model_1 = require("./models/individual.model");
const corporate_model_1 = require("./models/corporate.model");
const address_model_1 = require("./models/address.model");
class DatabaseConnection {
    constructor() {
        console.log(`Host=${config_1.config.HOST}`);
        this.createConnection();
    }
    createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sequelize = new sequelize_typescript_1.Sequelize({
                database: config_1.config.DB,
                port: config_1.config.PORT,
                host: config_1.config.HOST,
                username: config_1.config.USER,
                password: config_1.config.PASSWORD,
                dialect: config_1.dialect,
                pool: {
                    max: config_1.config.pool.max,
                    min: config_1.config.pool.min,
                    acquire: config_1.config.pool.acquire,
                    idle: config_1.config.pool.idle
                },
                models: [customer_model_1.Customer, individual_model_1.Individual, corporate_model_1.Corporate, address_model_1.Address]
            });
            yield this.sequelize.authenticate().then(() => {
                console.log("DB Connection Ready");
            }).catch((error) => {
                console.log("DB Connection Error");
            });
        });
    }
}
exports.DatabaseConnection = DatabaseConnection;

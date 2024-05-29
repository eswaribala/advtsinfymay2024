"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./api/routes");
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./graphql/schemas/schema"));
const resolver_1 = require("./graphql/resolvers/resolver");
class Server {
    constructor(app) {
        this.config(app);
        this.syncDatabase();
        new routes_1.Routes(app);
    }
    config(app) {
        const corsOptions = {
            origin: "http://localhost:3200"
        };
        app.use((0, cors_1.default)(corsOptions));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
            schema: schema_1.default,
            rootValue: resolver_1.root,
            graphiql: true
        }));
    }
    syncDatabase() {
        var _a;
        (_a = new db_1.DatabaseConnection().sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
}
exports.Server = Server;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const customer_route_1 = __importDefault(require("./customer.route"));
class Routes {
    constructor(app) {
        app.use("/api/customers", customer_route_1.default);
    }
}
exports.Routes = Routes;

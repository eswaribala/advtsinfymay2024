"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// @ts-ignore
const express_1 = __importDefault(require("express"));
const index_1 = require("./src/index");
exports.app = (0, express_1.default)();
const server = new index_1.Server(exports.app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3200;
exports.app
    .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    }
    else {
        console.log(err);
    }
});

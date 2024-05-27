"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoGenerator = void 0;
var AutoGenerator = /** @class */ (function () {
    function AutoGenerator() {
    }
    AutoGenerator.getOTP = function () {
        return Math.floor(Math.random() * 4000);
    };
    AutoGenerator.generateAccountNo = function (max, min) {
        return Math.floor(Math.random() * (max - min) + 1);
    };
    return AutoGenerator;
}());
exports.AutoGenerator = AutoGenerator;

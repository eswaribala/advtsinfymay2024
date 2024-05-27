"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Individual = void 0;
var customer_1 = require("./customer");
var Individual = /** @class */ (function (_super) {
    __extends(Individual, _super);
    function Individual(accountNo, firstName, lastName, contactNo, email, password, addresses, gender, dob) {
        var _this = _super.call(this, accountNo, firstName, lastName, contactNo, email, password, addresses) || this;
        _this._gender = gender;
        _this._dob = dob;
        return _this;
    }
    Object.defineProperty(Individual.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Individual.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        set: function (value) {
            this._dob = value;
        },
        enumerable: false,
        configurable: true
    });
    return Individual;
}(customer_1.Customer));
exports.Individual = Individual;

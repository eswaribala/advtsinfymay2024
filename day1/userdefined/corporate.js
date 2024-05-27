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
exports.Corporate = void 0;
var customer_1 = require("./customer");
var Corporate = /** @class */ (function (_super) {
    __extends(Corporate, _super);
    function Corporate(accountNo, firstName, lastName, contactNo, email, password, addresses, companyType) {
        //supper sends value from subclass constructor to super class constructor
        //always super should be first line
        var _this = _super.call(this, accountNo, firstName, lastName, contactNo, email, password, addresses) || this;
        _this._companyType = companyType;
        return _this;
    }
    Object.defineProperty(Corporate.prototype, "companyType", {
        get: function () {
            return this._companyType;
        },
        set: function (value) {
            this._companyType = value;
        },
        enumerable: false,
        configurable: true
    });
    Corporate.prototype.deposit = function (money) {
        return 0;
    };
    return Corporate;
}(customer_1.Customer));
exports.Corporate = Corporate;

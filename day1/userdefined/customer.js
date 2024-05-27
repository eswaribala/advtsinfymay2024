"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(accountNo, firstName, lastName, contactNo, email, password, addresses) {
        this._accountNo = accountNo;
        this._firstName = firstName;
        this._lastName = lastName;
        this._contactNo = contactNo;
        this._email = email;
        this._password = password;
        this._addresses = addresses;
    }
    Object.defineProperty(Customer.prototype, "accountNo", {
        get: function () {
            return this._accountNo;
        },
        set: function (value) {
            this._accountNo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "contactNo", {
        get: function () {
            return this._contactNo;
        },
        set: function (value) {
            this._contactNo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "addresses", {
        get: function () {
            return this._addresses;
        },
        set: function (value) {
            this._addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;

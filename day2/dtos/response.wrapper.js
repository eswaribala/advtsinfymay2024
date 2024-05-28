"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseWrapper = void 0;
var ResponseWrapper = /** @class */ (function () {
    function ResponseWrapper(data, message) {
        this._data = data;
        this._message = message;
    }
    Object.defineProperty(ResponseWrapper.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResponseWrapper.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: false,
        configurable: true
    });
    return ResponseWrapper;
}());
exports.ResponseWrapper = ResponseWrapper;

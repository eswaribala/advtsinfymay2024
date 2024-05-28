export class ResponseWrapper<R,S>{
    private _data:R;
    private _message:S;

    constructor(data: R, message: S) {
        this._data = data;
        this._message = message;
    }


    get data(): R {
        return this._data;
    }

    set data(value: R) {
        this._data = value;
    }

    get message(): S {
        return this._message;
    }

    set message(value: S) {
        this._message = value;
    }
}
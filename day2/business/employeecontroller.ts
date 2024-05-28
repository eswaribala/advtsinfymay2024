import {ResponseWrapper} from "../dtos/response.wrapper";

export class EmployeeController{
    private _data:any;
    response:object;
    error:string;
    // @ts-ignore
    async  fetchEmployees(api:string):Promise<ResponseWrapper<object, string>>{
        try {
            this._data = await fetch(api);
            this.response = await this._data.json();
            return new ResponseWrapper(this.response,"No Error");
        }catch(error){
            this.error=error;
            return new ResponseWrapper(null,this.error);
        }

    }
}
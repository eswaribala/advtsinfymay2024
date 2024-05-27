export class AutoGenerator{
    static getOTP():number{
        return Math.floor(Math.random()*4000);
    }

    static generateAccountNo(max:number,min:number):number{
        return Math.floor(Math.random()*(max-min)+1);
    }
}
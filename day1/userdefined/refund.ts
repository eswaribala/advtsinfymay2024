export interface Refund{
    accountNo:number;
    amount:number;
    dateOfRefund:Date;
    //optional
    status?:boolean
}
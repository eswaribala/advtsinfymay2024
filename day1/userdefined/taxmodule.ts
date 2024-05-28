import {CompanyType} from "../basics/companyType";

export module TaxModule{
    export interface GST{
        gstNo:number
        authorize()
        dashboard()
    }
    export interface TDS{
        percentageOfDeduction:number
        authorize()
        form24()
    }
    export interface ServiceTax{
        category:CompanyType
    }
}
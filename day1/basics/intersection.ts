import {TaxModule} from "../userdefined/taxmodule";
import {CompanyType} from "./companyType";

type SelfEmployed = TaxModule.GST & TaxModule.TDS
type MSME= TaxModule.GST & TaxModule.TDS & TaxModule.ServiceTax

//test intersection

let selfEmployedDoctor:SelfEmployed={
    gstNo:75476574,
    percentageOfDeduction:0.12,
    form24() {
    },
    authorize() {

    },
    dashboard() {
    }
}


let infoTech:MSME={
    gstNo:2567527,
    percentageOfDeduction:0.12,
    category:CompanyType.PRIVATE,
    dashboard() {
    },
    authorize() {

    },
    form24() {
    }


}
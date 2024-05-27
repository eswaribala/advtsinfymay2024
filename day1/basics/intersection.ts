import {GST} from "../userdefined/gst";
import {TDS} from "../userdefined/tds";
import {ServiceTax} from "../userdefined/serviceTax";
import {CompanyType} from "./companyType";

type SelfEmployed = GST & TDS
type MSME= GST & TDS & ServiceTax

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
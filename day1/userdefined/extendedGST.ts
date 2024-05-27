import {GST} from "./gst";

export interface ExtendedGST extends GST{
    cgst()
    sgst()
    igst()
}
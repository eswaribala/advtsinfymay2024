import {Customer} from "./customer.model";
import {Column, DataType, Table} from "sequelize-typescript";

@Table({
    tableName:'Corporate'
})
export class Corporate extends Customer{
    @Column({
        type:DataType.ENUM(...Object.values(Gender)),
        field:'Company_Type'
    })
    companyType?:CompanyType

}
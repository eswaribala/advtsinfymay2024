import {Customer} from "./customer.model";
import {Column, DataType, Table} from "sequelize-typescript";

@Table({
    tableName:'Individual'
})
export class Individual extends Customer{

    @Column({
        field:'Gender',
        type:DataType.ENUM(...Object.values(Gender)),
    })
    gender?:Gender

    @Column({
        type:DataType.DATE,
        field:'DOB'
    })
    dob?:Date

}
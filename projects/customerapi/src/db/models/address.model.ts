import {Model,Column, DataType, ForeignKey, Table,BelongsTo} from "sequelize-typescript";
import {Customer} from "./customer.model";
@Table({
    tableName:'Address'
})
export class Address extends Model<Address>{
    @Column({
        type:DataType.STRING,
        field:'Door_No'
    })
    doorNo?:string
    @Column({
        type:DataType.STRING,
        field:'Street_Name'
    })
    streetName?:string
    @Column({
        type:DataType.STRING,
        field:'City'
    })
    city?:string
    @Column({
        type:DataType.STRING,
        field:'State'
    })
    state?:string

    @ForeignKey(() => Customer)
    @Column({primaryKey:true})
    id?: number;

    @BelongsTo(() => Customer)
    customer!: Customer;


}
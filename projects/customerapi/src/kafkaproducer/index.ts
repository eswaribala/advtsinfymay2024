import { Kafka } from "kafkajs";
import {Customer} from "../db/models/customer.model";

const kafka = new Kafka({
    clientId: "test-app",
    brokers: ["localhost:9092"],
});

const producer = kafka.producer({
    maxInFlightRequests: 1,
    idempotent: true,
    transactionalId: "uniqueProducerId",
});

async function sendPayload(input: string) {
    try {
        await producer.send({
            topic: "customerinfytopic",
            messages: [{ key: "customerinfytopic", value: input }],
        });
    } catch (e) {
        console.error("Caught Error while sending:", e);
    }
}

export async function publish(customer: Customer | null) : Promise<void>{

    await producer.connect();
    // const firstName:string = typeof customer?.firstName === "string" ? customer?.firstName : "";
    let obj={
        data:customer
    }
    try {
        return await sendPayload(JSON.stringify(obj))
    } catch (e) {
        console.error(e);
    }

}


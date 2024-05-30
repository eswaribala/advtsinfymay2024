import { Kafka } from "kafkajs";
import {config} from "../config";
let broker=config.Kafka.HOST+":"+config.Kafka.PORT;
const kafka = new Kafka({
    clientId: "test-app",
    brokers: [broker],
});

const consumer = kafka.consumer({ groupId: config.Kafka.GROUPID });
export const consume = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: config.Kafka.TOPIC, fromBeginning: true });

    return await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log("Received: ", {
                partition,
                offset: message.offset,
                value: message.value?.toString('utf8'),
            });

        },
    });
};

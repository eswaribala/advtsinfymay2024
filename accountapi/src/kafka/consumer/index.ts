import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "test-app",
    brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });
export const consume = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "test", fromBeginning: true });

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

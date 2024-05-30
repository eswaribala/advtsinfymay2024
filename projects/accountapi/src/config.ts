export const config = {
    HOST: "localhost",
    PORT: 5433,
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "customerdb",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    Kafka:{
        HOST:'localhost',
        PORT: 9092,
        TOPIC:'customerinfytopic',
        GROUPID:'customerinfy-group'
    }
};

export const dialect = "postgres";
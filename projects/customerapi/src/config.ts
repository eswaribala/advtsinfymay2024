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
    aws_table_name: 'corporate',
    aws_local_config: {
        //Provide details for local configuration
    },
    aws_remote_config: {
        accessKeyId: '',
        secretAccessKey: '',
        region: 'us-east-1',
    }
};

export const dialect = "postgres";
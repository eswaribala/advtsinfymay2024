const createCustomer = {
    tags: ['Customers'],
    description: 'Create a new use in the system',
    operationId: 'createCustomer',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createCustomerBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Customer created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            customerId: {
                                type: 'number',
                                example: '60564',
                            },
                            firstName: {
                                type: 'string',
                                example: 'John Snow',
                            },
                            middleName: {
                                type: 'string',
                                example: 'John Snow',
                            },
                            lastName: {
                                type: 'string',
                                example: 'John Snow',
                            },
                            email: {
                                type: 'string',
                                example: 'john.snow@email.com',
                            },
                            password: {
                                type: 'string',
                                example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
                            },
                            contactNo: {
                                type: 'number',
                                example: '60564',
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal Server Error',
                            },
                        },
                    },
                },
            },
        },
    },
};
const createCustomerBody = {
    type: 'object',
    properties: {
        customerId: {
            type: 'number',
            example: '60564',
        },
        firstName: {
            type: 'string',
            example: 'John Snow',
        },
        middleName: {
            type: 'string',
            example: 'John Snow',
        },
        lastName: {
            type: 'string',
            example: 'John Snow',
        },
        email: {
            type: 'string',
            example: 'john.snow@email.com',
        },
        password: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
        },
        contactNo: {
            type: 'number',
            example: '60564',
        },
    },
};

export { createCustomer, createCustomerBody };
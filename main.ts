interface HelloWorld {
    key1: string;
    key2: string;
    key3: string;
}

interface Response {
    statusCode: number;
    headers: any;
    body: any;
}

export const handler = async (event: HelloWorld): Promise<Response> => {
    console.log('Hello World!');
    return {
        statusCode: 200,
        headers: {'Content-Type': 'application/json'},
        body: `${JSON.stringify(event)}`
    };
}

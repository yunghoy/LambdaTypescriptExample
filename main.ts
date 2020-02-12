interface HelloWorld {
    key1: string;
    key2: string;
    key3: string;
}

export const handler = async (event: HelloWorld): Promise<any> => {
    console.log('Hello World!');
    // const response = JSON.stringify(event, null, 2);
    // return response;
    return event.key1;
}

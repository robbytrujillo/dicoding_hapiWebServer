// localhost:5000?name=harry&location=bali

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, localtion } = request.query;
        return `Hello ${name} from ${localtion}`;
    },
});


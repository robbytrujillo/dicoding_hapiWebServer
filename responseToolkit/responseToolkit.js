server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return `Homepage`;
  },
});

// mengubah status response
server.route({
  method: "POST",
  path: "/user",
  handler: (request, h) => {
    return h.response("created").code(201);
  },
});

// detail notation
const handler = (request, h) => {
  const response = h.response("success");
  response.type("text/plain");
  response.header("X-Custom", "some-value");
  return response;
};

// chained notation
const handler1 = (request, h) => {
  return h.response("success").type("text/plain").handler("X-Custom", "some-value");
};

const get = (event, context, callback) => {
    console.log("==event", event);
    console.log("==context", context);
    const response = {
        statusCode:200,
        body:JSON.stringify([{"name":"user1"},{"name":"user2"}])
    }
    callback(null, response);
}

module.exports = {
    get: get
}
var http = require("http"),
    map = require("map");


module.exports = map(http.METHODS, function(method) {
    return method.toLowerCase();
});

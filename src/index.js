var http = require("http"),
    arrayMap = require("array-map");


module.exports = arrayMap(http.METHODS, function(method) {
    return method.toLowerCase();
});

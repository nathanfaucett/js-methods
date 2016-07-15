var http = require("http"),
    arrayMap = require("@nathanfaucett/array-map");


module.exports = arrayMap(http.METHODS, function(method) {
    return method.toLowerCase();
});

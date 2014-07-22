var isClient = !!(typeof(window) !== "undefined" && typeof(navigator) !== "undefined" && window.document),
    http;


if (!isClient && (http = require("http")).METHODS) {
    module.exports = http.METHODS.map(function(method) {
        return method.toLowerCase();
    });
} else {
    module.exports = [
        "checkout",
        "connect",
        "copy",
        "delete",
        "get",
        "head",
        "lock",
        "m-search",
        "merge",
        "mkactivity",
        "mkcol",
        "move",
        "notify",
        "options",
        "patch",
        "post",
        "propfind",
        "proppatch",
        "purge",
        "put",
        "report",
        "search",
        "subscribe",
        "trace",
        "unlock",
        "unsubscribe"
    ];
}

module.exports = function generate(options) {
    if (options.length == null) {
        options.length = 8;
    }

    if (options.prefix == null) {
        options.prefix = "";
    }

    if (options.keyspace == null) {
        options.keyspace =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    var key = "";

    if (options.onlyPrefix) {
        return options.prefix + key;
    }

    if (options.includePrefix == true) {
        options.prefix;
    }

    if (options.includePrefix == false) {
        options.prefix = "";
    }

    for (var i = 0; i < options.length; i++) {
        key += options.keyspace.charAt(
            Math.floor(Math.random() * options.keyspace.length)
        );
    }

    return options.prefix + key;
};

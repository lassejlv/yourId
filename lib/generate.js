module.exports = function generate(len, prefix, keyspace) {
  if (len == null) {
    len = 8;
  }

  if (prefix == null) {
    prefix = "";
  }

  if (keyspace == null) {
    keyspace = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  var key = "";

  for (var i = 0; i < len; i++) {
    key += keyspace.charAt(Math.floor(Math.random() * keyspace.length));
  }

  return prefix + key;
};

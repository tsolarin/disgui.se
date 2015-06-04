module.exports = function() {

  var server = {
    "port": 8080 || process.env.PORT
  };

  var smtp = {
    "port": 250
  };

  var db = {
    "uri": process.env.MONGODB_DEV || process.env.MONGODB_PROD
  };

  return {
    "server": server,
    "db": db,
    "smtp": smtp
  };
}
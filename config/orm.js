var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, colName, val, cb) {
    var queryString =
      "INSERT INTO " + table + "(" + colName + ") VALUES('" + val + "')" + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(table, colName, val, boolean, cb) {
    var queryString = "UPDATE " + table + " SET ? WHERE ? ;";
    console.log(queryString);
    connection.query(
      queryString,
      [{ devoured: boolean }, { [colName]: val }],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  }
};

module.exports = orm;

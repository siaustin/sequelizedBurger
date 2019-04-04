var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(colName, val, callback) {
    orm.insertOne("burgers", colName, val, function(res) {
      callback(res);
    });
  },
  updateOne: function(idVal, boolean, callback) {
    orm.updateOne("burgers", "id", idVal, boolean, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;

var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var object = {
      burgers: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/new", function(req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/:id", function(req, res) {
  console.log(req.params.id);
  burger.updateOne(req.params.id, req.body.boolean, function(result) {
    res.json(result.affectedRows);
  });
});

module.exports = router;

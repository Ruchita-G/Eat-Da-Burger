var express = require("express");
var bodyparser= require("body-parser");
var methodOverride= require("method-override");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(burger_data){
		console.log(burger_data);
		res.render('index',{burger_data});

	})
	
});

router.put("/burgers/update", function(req, res) {
console.log(req.body.burger_id);
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

router.post("/burgers/create", function(req, res) {
console.log("postrouteshit");
	burger.create(req.body.burger_name, function(result) {
		console.log(result);
		res.redirect("/");
	});
})

module.exports = router;
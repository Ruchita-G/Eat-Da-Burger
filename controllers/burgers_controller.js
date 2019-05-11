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
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.end(); // do not redirect here, since client is using AJAX for this request
	});
});

router.post("/burgers/create", function(req, res) {
console.log("postrouteshit");
	burger.create(req.body.burger_name, function(result) {
		console.log(result);
		res.redirect("/"); // this redirect is ok, client is not using AJAX for creating
	});
})

module.exports = router;

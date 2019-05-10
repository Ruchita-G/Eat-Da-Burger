var connection = require("./connection.js");

var orm = {
	all: function (tableInput, cb) {
		connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},


	update: function (tableInput, condition, cb) {
		connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function (err, result) {
			if (err) {
				throw err;
			}
			console.log(condition);
			cb(result);
		});
	},


	create: function (tableInput, val, cb) {
		console.log("INSERT INTO " + tableInput + " (burger_name) VALUES (" + val + ");");
		connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');", function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}

};

module.exports = orm;
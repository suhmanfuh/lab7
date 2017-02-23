var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	// sending boolean variable 'min' to handlebars
	// template so if/else block can be used to
	// render different versions
	projects["min"] = false;
  	res.render('index', projects);
};

// controller that exports function viewMin
exports.viewMin = function(req,res){
	projects["min"] = true;
	// render index.handlebars
	res.render('index', projects);
}
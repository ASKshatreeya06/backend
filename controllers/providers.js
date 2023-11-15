const providers = require('../models/providers');

module.exports.list = function(req,res){

	res.render('providers/providers-list',{ providers : providers})

}

const providers = require('../models/providers');

module.exports.list = function(req,res){

	res.render('providers/providers-list',{ title : 'Service Providers', providers : providers})

}

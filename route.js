

module.exports = {

	init: function(app) {
		
		app.get('/', function(req, res){
			res.send('Hello World');
		})

	}



};
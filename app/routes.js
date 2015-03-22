module.exports = function(app, db) {
    // setup ------------------------------------------
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(db.url, function(err, database) {
	    if(err) throw err;
	    db = database;
	    console.log("Connected to the database.");
	});

    // api --------------------------------------------

    // application ------------------------------------
    app.get('/posts', function(req, res) {
	    db.collection("posts", function(err, posts){
		    if(err) throw err;
		    posts.find(function(err, items){
			    if(err) throw err;
			    items.toArray(function(err, itemArr){
				    if(err) throw err;
				    res.json(itemArr);
				});
			});
		});
	});

    app.get('*', function(req, res) {
	    res.sendfile('./public/index.html');
	});
}
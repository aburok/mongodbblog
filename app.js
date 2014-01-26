var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err,db) {
		if (err) throw err;

		var query = { score : { $gt : 95 }, type : "exam" };

		db.collection('scores').findOne(query, function(err, doc){
			if (err) throw err;

			console.dir(doc);

			db.close();
		});
		});


var MongoClient = require('mongodb').MongoClient;

var server = 'mongodb://localhost:27017/test';
var collection = 'scores';

MongoClient.connect(server, function(err,db) {
	if (err) throw err;

	var query = { score : { $gt : 95 }, type : "exam" };

	db.collection('scores').findOne(query, function(err, doc){
		if (err) throw err;

		console.dir(doc);

		db.close();
	});
});

MongoClient.connect(server, function(err, db) {
	if (err) throw err;

	var query = { $or : [ { score : { $gt : 95 }, type : 'exam' },
		{score : { $gt : 98 }, type : 'quiz' } ] };

	db.collection('scores').find( query ). toArray( 
		function(err, docs) {
			if (err) throw err;

			console.dir(docs);

			db.close();
		});
});

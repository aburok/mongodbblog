var MongoClient = require('mongodb').MongoClient;

var server = 'mongodb://localhost:27017/test';
var collection = 'scores';

MongoClient.connect(server, function(err,db) {
	if (err) throw err;


	var query = { score : { $gt : 95 }, type : "exam" };

	db.collection('scores').findOne(query, function(err, doc){
		if (err) throw err;

		console.log("Find first student with exam score higher than 95.");
		console.dir(doc);

		db.close();
	});
});

MongoClient.connect(server, function(err, db) {
	if (err) throw err;


	var query = { $or : [ { score : { $gt : 95 }, type : 'exam' },
		{score : { $gt : 98 }, type : 'quiz' } ] };

	db.collection('scores').find( query ).limit(3).toArray( 
		function(err, docs) {
			if (err) throw err;

			console.log("Find 3 student with exam score higher than 95 or quiz score higher than 98");
			console.dir(docs);

			db.close();
		});
});

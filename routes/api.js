var mysql = require('mysql'),
	http = require('http');

/*
 * Serve JSON to our AngularJS client
 */

exports.programs = function (req, res) {
	console.log("Trying to get the programs");
	var connection = mysql.createConnection({
		host     : '',
		user     : '',
		password : '',
	});

	connection.connect();
	var query = 'SELECT * FROM programs';
	connection.query(query, function(err, rows, fields) {
		if (err) {
			console.log("Error:", err);
			res.json({"error":"Could not connect..."});
		} else {
			console.log("Success:", rows);
			res.json(rows);
		}
	});
};
exports.startIndex = function(req, res) {

	console.log("Launch server-side indexing ...");
	var connection = mysql.createConnection({
		host     : '',
		user     : '',
		password : '',
	});

	connection.connect();
	var query = 'SELECT * FROM programs';
	connection.query(query, function(err, rows, fields) {
		if (err) {
			console.log("Error:", err);
		} else {
			console.log("Success:", rows);
			for (var index in rows) {
				var programId = rows[index]['index'];

				var options = {
				  hostname: '',
				  port: 8080,
				  path: '',
				  method: 'POST',
				  headers : {
	                        'Content-Type':'application/xml'
	                    },
	              data: ''
				};
				var req = http.request(options, function(res) {
				  console.log('STATUS: ' + res.statusCode);
				  console.log('HEADERS: ' + JSON.stringify(res.headers));
				  res.setEncoding('utf8');
				  res.on('data', function (chunk) {
				    console.log('BODY: ' + chunk);
				  });
				});
				req.write('data');
				req.end();
			}
		}
	});

};
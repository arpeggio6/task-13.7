var fs = require('fs');

fs.readdir('.', function(err, data) {
  if (err) throw err;
  console.log(data);
  
	fs.writeFile('content.txt', data, function	(err) {
	  if (err) throw err;
	  console.log('The file has been saved!');
	});
});
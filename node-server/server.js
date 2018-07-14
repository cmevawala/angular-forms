var http = require('http');
var formidable = require('formidable');
var util = require('util');

var server = http.createServer(function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (request.method.toLowerCase() === "post") {
        processForm(request, response);
        return;
    }

    response.end();
});

function processForm(request, response) {
    var form = new formidable.IncomingForm();

    form.parse(request, function (error, fields) {
        response.writeHead(200, {
            'content-type': 'text/plain'
        });

        response.end(JSON.stringify({
            "fields": fields
        }));

        console.log("posted fields: \n");
        console.log(util.inspect({
            "fields": fields
        }));
    });
}

var port = 3100;
server.listen(port);
console.log('server listening on port: ' + port);
var http = require('http');
var qs = require('querystring');
var sys = require('sys');
var port = process.argv[2] || 9000;

http.createServer(function (req, res) 
{
    var body = '';

    req.on('data', function(chunk) 
    {
        body += chunk.toString();
    });

    req.on('end', function()
    {
        console.log('--------------------------------------------');
        console.log(sys.inspect(req.headers));
        console.log(sys.inspect(qs.parse(body.replace(/\+/g, ' '))));
        console.log('--------------------------------------------');
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

}).listen(port, "127.0.0.1");

console.log('dump.io running at http://127.0.0.1:'+port+'/');

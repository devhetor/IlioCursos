const http = require('http');

http.createServer((req,res) => {
    if(req.url === '/'){
    res.write('<html>')
    res.write('<head> <title> Node app</title> </head>')
    res.write('<body> <h1> Hello world </h1> <p> I am learning Node </p></body>')
    res.write('</html')
    res.end()
    }
    else{
        res.write('Hello world');
        res.end()
        
    }
}).listen(3001)
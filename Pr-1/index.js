const http = require('http');

const port = 9000;

const fs = require('fs');

http.createServer((req,res) => {
    console.log(req.url);
    let fileName = "";
    switch(req.url) {
        case "/":
            fileName = './home.html'
            break;
        
        case "/about" :
            fileName = './about.html'
            break;

        case "/service" : 
            fileName = './service.html'
            break;
        
        case "contect" :
            fileName = './contect.html'
            break;

        default :
            fileName = './404.html'
    }
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log("file is not found...");
            return false;
        }
        res.end(data)
    })
}).listen(port)